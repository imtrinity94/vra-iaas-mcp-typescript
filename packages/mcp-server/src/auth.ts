/**
 * Authentication for the Aria Automation / VCF Automation IaaS API.
 *
 * Supported platforms and flows
 * -----------------------------
 * VCF Automation 9.x (VCFA) has two tenant organization types, "VM Apps" and "All Apps",
 * plus the Provider (system) context. The old vRA 8 username/password refresh-token call
 * (POST /csp/gateway/am/api/login?access_token) is NOT available on 9.x, so credentials
 * are handled as follows:
 *
 *   1. API token (recommended, both org types)
 *        User creates an API token in the UI (My Account > API Tokens), then:
 *        POST /oauth/tenant/{org}/token   (Provider: POST /oauth/provider/token)
 *          Content-Type: application/x-www-form-urlencoded
 *          grant_type=refresh_token&refresh_token=<API token>
 *        -> { access_token, token_type: "Bearer", expires_in: 3600, refresh_token }
 *        Broadcom's VM Apps docs show the same call under a "/tm" prefix
 *        (/tm/oauth/tenant/{org}/token); we try both and remember which one worked.
 *        Service-account refresh tokens (device-code flow) use the same exchange.
 *
 *   2. Username/password session (VM Apps and All Apps, 9.x)
 *        POST /cloudapi/1.0.0/sessions   (Provider: /cloudapi/1.0.0/sessions/provider)
 *          Authorization: Basic base64("<user>@<org>:<password>")   (Provider: user@system)
 *          Accept: application/json;version=9.0.0
 *        -> access token returned in the `x-vmware-vcloud-access-token` response header.
 *        NOTE: this token is a Cloud Director style session token. It is guaranteed for
 *        /cloudapi; whether /iaas/api accepts it depends on the VCFA version, so the token
 *        is probed against /iaas/api and a warning is logged if it is rejected.
 *
 *   3. Legacy vRA 8.x / Aria Automation 8.x (no VRA_ORG set, or VRA_AUTH_MODE=legacy-csp)
 *        POST /csp/gateway/am/api/login?access_token  -> refresh_token
 *        POST /iaas/api/login                         -> bearer token
 *
 * Access tokens on VCFA 9.x live for about one hour (vs ~8h on vRA 8), so this module keeps
 * track of expiry and `getFreshBearerToken()` re-authenticates when needed.
 */

type AuthMode = 'api-token' | 'session' | 'legacy-csp';
type OrgType = 'vm-apps' | 'all-apps' | 'provider';

interface TokenState {
  token: string;
  /** epoch ms; undefined = unknown, never proactively refreshed */
  expiresAt?: number;
  refresh: () => Promise<TokenState>;
}

const REQUEST_TIMEOUT_MS = 30_000;
const EXPIRY_SKEW_MS = 60_000;
const DEFAULT_EXPIRES_IN_S = 3600;

let state: TokenState | undefined;
let inflight: Promise<string | undefined> | undefined;
/** Remembers whether the "/tm" prefixed token endpoint was the one that worked. */
let tokenPathPrefix: '' | '/tm' | undefined;

const readFirstEnv = (...keys: string[]) => {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return undefined;
};

const log = (msg: string) => console.error(`[vra-auth] ${msg}`);

const normalizeBaseURL = () => {
  const baseURL = readFirstEnv('VRA_BASE_URL', 'VRA_IAAS_BASE_URL');
  if (baseURL) return baseURL.replace(/\/+$/, '');

  const fqdn = readFirstEnv('VRA_FQDN', 'VRA_IAAS_FQDN');
  if (!fqdn) return undefined;

  if (fqdn.startsWith('http://') || fqdn.startsWith('https://')) {
    return fqdn.replace(/\/+$/, '');
  }
  return `https://${fqdn}`.replace(/\/+$/, '');
};

const parseOrgType = (value: string | undefined): OrgType | undefined => {
  if (!value) return undefined;
  const v = value.toLowerCase().replace(/[\s_]+/g, '-');
  if (v === 'vm-apps' || v === 'vmapps' || v === 'vm') return 'vm-apps';
  if (v === 'all-apps' || v === 'allapps' || v === 'all') return 'all-apps';
  if (v === 'provider' || v === 'system') return 'provider';
  throw new Error(`Unsupported VRA_ORG_TYPE "${value}". Use "vm-apps", "all-apps" or "provider".`);
};

async function http(url: string, init: RequestInit): Promise<{ res: Response; body: string }> {
  const res = await fetch(url, { ...init, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
  return { res, body: await res.text() };
}

function parseJson(body: string, what: string): any {
  try {
    return JSON.parse(body);
  } catch {
    throw new Error(`${what} returned a non-JSON response: ${body.slice(0, 300)}`);
  }
}

/** OAuth refresh_token grant against the 9.x token endpoint (tenant org or provider). */
async function exchangeRefreshToken(
  baseURL: string,
  org: string,
  orgType: OrgType | undefined,
  initialRefreshToken: string,
): Promise<TokenState> {
  let currentRefreshToken = initialRefreshToken;
  const isProvider = orgType === 'provider' || org.toLowerCase() === 'provider';
  const basePath = isProvider ? '/oauth/provider/token' : `/oauth/tenant/${encodeURIComponent(org)}/token`;

  const prefixes: Array<'' | '/tm'> =
    tokenPathPrefix !== undefined ? [tokenPathPrefix]
    : orgType === 'vm-apps' ? ['/tm', '']
    : ['', '/tm'];

  const run = async (): Promise<TokenState> => {
    let lastError = '';
    for (const prefix of prefixes) {
      const { res, body } = await http(`${baseURL}${prefix}${basePath}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: currentRefreshToken,
        }).toString(),
      });

      if (res.status === 404) {
        lastError = `404 at ${prefix}${basePath}`;
        continue; // try the other prefix
      }
      if (!res.ok) {
        throw new Error(
          `VCFA token exchange failed (${res.status}) at ${prefix}${basePath}: ${body}. ` +
            `Check VRA_ORG ("${org}"), VRA_ORG_TYPE and that the API token belongs to that org ` +
            `(a System/provider token is refused by tenant endpoints).`,
        );
      }

      tokenPathPrefix = prefix;
      const parsed = parseJson(body, 'VCFA token exchange');
      const accessToken = parsed?.access_token;
      if (!accessToken) throw new Error('VCFA token exchange did not return access_token');

      // Service-account tokens rotate: always adopt a newly issued refresh token.
      if (parsed.refresh_token) currentRefreshToken = parsed.refresh_token;

      const expiresIn = Number(parsed.expires_in) || DEFAULT_EXPIRES_IN_S;
      return {
        token: accessToken,
        expiresAt: Date.now() + expiresIn * 1000,
        refresh: run,
      };
    }
    throw new Error(`VCFA token endpoint not found (${lastError}). Is VRA_FQDN a VCF Automation 9.x host?`);
  };

  return run();
}

/** Username/password session on VCFA 9.x (VM Apps / All Apps / Provider). */
async function loginSession(
  baseURL: string,
  org: string,
  orgType: OrgType | undefined,
  username: string,
  password: string,
): Promise<TokenState> {
  const isProvider = orgType === 'provider' || org.toLowerCase() === 'provider' || org.toLowerCase() === 'system';
  const principal = isProvider ? `${username}@system` : `${username}@${org}`;
  const path = isProvider ? '/cloudapi/1.0.0/sessions/provider' : '/cloudapi/1.0.0/sessions';

  const run = async (): Promise<TokenState> => {
    const { res, body } = await http(`${baseURL}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json;version=9.0.0',
        Authorization: `Basic ${Buffer.from(`${principal}:${password}`).toString('base64')}`,
      },
    });
    if (!res.ok) {
      throw new Error(`VCFA session login failed (${res.status}) for ${principal}: ${body}`);
    }
    const token = res.headers.get('x-vmware-vcloud-access-token');
    if (!token) {
      throw new Error('VCFA session login succeeded but no x-vmware-vcloud-access-token header was returned');
    }
    // Session lifetime is a provider-side setting; refresh conservatively every 30 minutes.
    return { token, expiresAt: Date.now() + 30 * 60_000, refresh: run };
  };

  return run();
}

/** vRA 8.x / Aria Automation 8.x two-step login (CSP, then IaaS). */
async function loginLegacyCsp(baseURL: string, username: string, password: string): Promise<TokenState> {
  const run = async (): Promise<TokenState> => {
    const login = await http(`${baseURL}/csp/gateway/am/api/login?access_token`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (!login.res.ok) {
      throw new Error(`vRA CSP login failed (${login.res.status}): ${login.body}`);
    }
    const parsedLogin = parseJson(login.body, 'vRA CSP login');
    const refreshToken = parsedLogin?.refresh_token || parsedLogin?.access_token;
    if (!refreshToken) throw new Error('vRA CSP login did not return refresh_token/access_token');

    const iaas = await http(`${baseURL}/iaas/api/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });
    if (!iaas.res.ok) {
      throw new Error(`vRA IaaS login failed (${iaas.res.status}): ${iaas.body}`);
    }
    const parsedIaas = parseJson(iaas.body, 'vRA IaaS login');
    const token = parsedIaas?.token || parsedIaas?.access_token || parsedIaas?.cspAuthToken;
    if (!token) throw new Error('vRA IaaS login did not return a bearer token');

    // vRA 8 bearer tokens last ~8h; refresh after 7h.
    return { token, expiresAt: Date.now() + 7 * 3600_000, refresh: run };
  };

  return run();
}

/** Best-effort probe so a token that /iaas/api rejects is called out at startup. */
async function probeIaas(baseURL: string, token: string, mode: AuthMode) {
  try {
    const { res } = await http(`${baseURL}/iaas/api/projects?$top=1`, {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
    });
    if (res.status === 401 || res.status === 403) {
      log(
        `Warning: /iaas/api rejected the ${mode} token (${res.status}). ` +
          (mode === 'session' ?
            'Session tokens are cloudapi-scoped on some VCFA versions; use VRA_API_TOKEN instead.'
          : 'Check the user/token has IaaS (project) access.'),
      );
    }
  } catch (e) {
    log(`Warning: could not probe /iaas/api (${e instanceof Error ? e.message : e}).`);
  }
}

function resolveMode(opts: {
  explicit?: string | undefined;
  apiToken?: string | undefined;
  org?: string | undefined;
  username?: string | undefined;
  password?: string | undefined;
}): AuthMode | undefined {
  if (opts.explicit) {
    const m = opts.explicit.toLowerCase();
    if (m === 'api-token' || m === 'session' || m === 'legacy-csp') return m;
    throw new Error(`Unsupported VRA_AUTH_MODE "${opts.explicit}". Use "api-token", "session" or "legacy-csp".`);
  }
  if (opts.apiToken) return 'api-token';
  if (opts.username && opts.password) return opts.org ? 'session' : 'legacy-csp';
  return undefined;
}

async function authenticate(): Promise<TokenState | undefined> {
  const baseURL = normalizeBaseURL();
  const username = readFirstEnv('VRA_USERNAME', 'VRA_IAAS_USERNAME');
  const password = readFirstEnv('VRA_PASSWORD', 'VRA_IAAS_PASSWORD');
  const apiToken = readFirstEnv('VRA_API_TOKEN', 'VRA_REFRESH_TOKEN', 'VRA_IAAS_API_TOKEN');
  const org = readFirstEnv('VRA_ORG', 'VRA_TENANT', 'VRA_ORGANIZATION');
  const orgType = parseOrgType(readFirstEnv('VRA_ORG_TYPE'));

  const mode = resolveMode({ explicit: readFirstEnv('VRA_AUTH_MODE'), apiToken, org, username, password });

  if (!baseURL || !mode) {
    console.error(
      'Set VRA_FQDN plus one of: VRA_API_TOKEN + VRA_ORG (VCFA 9.x, recommended), ' +
        'VRA_USERNAME + VRA_PASSWORD + VRA_ORG (VCFA 9.x session), ' +
        'VRA_USERNAME + VRA_PASSWORD (vRA 8.x), or VRA_IAAS_BEARER_TOKEN.',
    );
    return undefined;
  }

  let result: TokenState;
  if (mode === 'api-token') {
    if (!apiToken) throw new Error('VRA_AUTH_MODE=api-token requires VRA_API_TOKEN.');
    const effectiveOrg = org ?? (orgType === 'provider' ? 'provider' : undefined);
    if (!effectiveOrg) throw new Error('VCFA token exchange needs VRA_ORG (the tenant organization name).');
    result = await exchangeRefreshToken(baseURL, effectiveOrg, orgType, apiToken);
  } else if (mode === 'session') {
    if (!username || !password) throw new Error('Session login requires VRA_USERNAME and VRA_PASSWORD.');
    const effectiveOrg = org ?? (orgType === 'provider' ? 'system' : undefined);
    if (!effectiveOrg) throw new Error('Session login needs VRA_ORG (the tenant organization name).');
    result = await loginSession(baseURL, effectiveOrg, orgType, username, password);
  } else {
    if (!username || !password) throw new Error('Legacy CSP login requires VRA_USERNAME and VRA_PASSWORD.');
    result = await loginLegacyCsp(baseURL, username, password);
  }

  log(
    `Authenticated via ${mode}${org ? ` (org=${org}${orgType ? `, type=${orgType}` : ''})` : ''}` +
      `${result.expiresAt ? `, token valid ~${Math.round((result.expiresAt - Date.now()) / 60000)} min` : ''}.`,
  );
  await probeIaas(baseURL, result.token, mode);

  process.env['VRA_IAAS_BASE_URL'] = baseURL;
  return result;
}

/**
 * Startup hook: if no bearer token was supplied, obtain one from the configured credentials.
 * Exported name kept for backward compatibility with index.ts.
 */
export async function ensureBearerToken() {
  if (process.env['VRA_IAAS_BEARER_TOKEN']) {
    return;
  }
  state = await authenticate();
  if (state) process.env['VRA_IAAS_BEARER_TOKEN'] = state.token;
}

/**
 * Returns the current bearer token, re-authenticating first if the token is (about to be)
 * expired. Returns undefined when the server is not managing credentials itself (for example
 * a static VRA_IAAS_BEARER_TOKEN, or per-request tokens in HTTP transport).
 */
export async function getFreshBearerToken(): Promise<string | undefined> {
  if (!state) return undefined;
  if (!state.expiresAt || Date.now() < state.expiresAt - EXPIRY_SKEW_MS) return state.token;

  // Coalesce concurrent callers into a single refresh.
  inflight ??= (async () => {
    try {
      log('Access token expired or expiring, re-authenticating...');
      state = await state!.refresh();
      process.env['VRA_IAAS_BEARER_TOKEN'] = state.token;
      return state.token;
    } finally {
      inflight = undefined;
    }
  })();
  return inflight;
}

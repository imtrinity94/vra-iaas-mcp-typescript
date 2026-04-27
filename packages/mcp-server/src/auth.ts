const readFirstEnv = (...keys: string[]) => {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return undefined;
};

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

export async function ensureBearerToken() {
  if (process.env['VRA_IAAS_BEARER_TOKEN']) {
    return;
  }

  const baseURL = normalizeBaseURL();
  const username = readFirstEnv('VRA_USERNAME', 'VRA_IAAS_USERNAME');
  const password = readFirstEnv('VRA_PASSWORD', 'VRA_IAAS_PASSWORD');

  if (!baseURL || !username || !password) {
    console.error(
      'Set VRA_FQDN, VRA_USERNAME, and VRA_PASSWORD (or provide VRA_IAAS_BEARER_TOKEN).',
    );
    return;
  }

  const loginRes = await fetch(`${baseURL}/csp/gateway/am/api/login?access_token`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const loginBody = await loginRes.text();
  if (!loginRes.ok) {
    throw new Error(`vRA CSP login failed (${loginRes.status}): ${loginBody}`);
  }

  const parsedLogin = JSON.parse(loginBody);
  const refreshToken = parsedLogin?.refresh_token || parsedLogin?.access_token;
  if (!refreshToken) {
    throw new Error('vRA CSP login did not return refresh_token/access_token');
  }

  const iaasRes = await fetch(`${baseURL}/iaas/api/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });
  const iaasBody = await iaasRes.text();
  if (!iaasRes.ok) {
    throw new Error(`vRA IaaS login failed (${iaasRes.status}): ${iaasBody}`);
  }

  const parsedIaas = JSON.parse(iaasBody);
  const bearerToken = parsedIaas?.token || parsedIaas?.access_token || parsedIaas?.cspAuthToken;
  if (!bearerToken) {
    throw new Error('vRA IaaS login did not return a bearer token');
  }

  process.env['VRA_IAAS_BEARER_TOKEN'] = bearerToken;
  process.env['VRA_IAAS_BASE_URL'] = baseURL;
  console.error('Successfully generated vRA IaaS bearer token from credentials.');
}

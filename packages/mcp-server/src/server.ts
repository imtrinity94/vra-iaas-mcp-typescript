// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  SetLevelRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { ClientOptions } from 'vra_iaas';
import VraIaas from 'vra_iaas';
import { getFreshBearerToken } from './auth';
import { codeTool } from './code-tool';
import docsSearchTool from './docs-search-tool';
import { McpOptions } from './options';
import { HandlerFunction, McpTool } from './types';

export { McpOptions } from './options';
export { ClientOptions } from 'vra_iaas';

export const newMcpServer = () =>
  new McpServer(
    {
      name: 'vra_iaas_api',
      version: '0.0.5',
    },
    { capabilities: { tools: {}, logging: {} } },
  );

// Create server instance
export const server = newMcpServer();

/**
 * Initializes the provided MCP Server with the given tools and handlers.
 * If not provided, the default client, tools and handlers will be used.
 */
export function initMcpServer(params: {
  server: Server | McpServer;
  clientOptions?: ClientOptions;
  mcpOptions?: McpOptions;
}) {
  const server = params.server instanceof McpServer ? params.server.server : params.server;

  const logAtLevel =
    (level: 'debug' | 'info' | 'warning' | 'error') =>
      (message: string, ...rest: unknown[]) => {
        void server.sendLoggingMessage({
          level,
          data: { message, rest },
        });
      };
  const logger = {
    debug: logAtLevel('debug'),
    info: logAtLevel('info'),
    warn: logAtLevel('warning'),
    error: logAtLevel('error'),
  };

  const baseURLFromEnv = readEnv('VRA_BASE_URL') || readEnv('VRA_IAAS_BASE_URL');
  const fqdnFromEnv = readEnv('VRA_FQDN') || readEnv('VRA_IAAS_FQDN');
  const resolvedBaseURL =
    baseURLFromEnv ||
    (fqdnFromEnv ?
      (fqdnFromEnv.startsWith('http://') || fqdnFromEnv.startsWith('https://') ?
        fqdnFromEnv
      : `https://${fqdnFromEnv}`)
    : undefined);

  let client = new VraIaas({
    logger,
    baseURL: resolvedBaseURL,
    ...params.clientOptions,
    defaultHeaders: {
      ...params.clientOptions?.defaultHeaders,
      'X-Stainless-MCP': 'true',
    },
  });

  const tokenIsManaged = !params.clientOptions?.bearerToken;
  let currentBearerToken: string | undefined = params.clientOptions?.bearerToken ?? readEnv('VRA_IAAS_BEARER_TOKEN');

  const providedTools = selectTools(params.mcpOptions);
  const toolMap = Object.fromEntries(providedTools.map((mcpTool) => [mcpTool.tool.name, mcpTool]));

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: providedTools.map((mcpTool) => mcpTool.tool),
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const mcpTool = toolMap[name];
    if (!mcpTool) {
      throw new Error(`Unknown tool: ${name}`);
    }

    // VCFA 9.x access tokens last ~1h: re-authenticate when the server owns the credentials.
    // Skipped when the caller supplied its own token (CLI flag or per-request HTTP header).
    const freshToken = tokenIsManaged ? await getFreshBearerToken() : undefined;
    if (freshToken && freshToken !== currentBearerToken) {
      client = client.withOptions({ bearerToken: freshToken });
      currentBearerToken = freshToken;
    }

    return executeHandler(mcpTool.handler, client, args);
  });

  server.setRequestHandler(SetLevelRequestSchema, async (request) => {
    const { level } = request.params;
    switch (level) {
      case 'debug':
        client = client.withOptions({ logLevel: 'debug' });
        break;
      case 'info':
        client = client.withOptions({ logLevel: 'info' });
        break;
      case 'notice':
      case 'warning':
        client = client.withOptions({ logLevel: 'warn' });
        break;
      case 'error':
        client = client.withOptions({ logLevel: 'error' });
        break;
      default:
        client = client.withOptions({ logLevel: 'off' });
        break;
    }
    return {};
  });
}

/**
 * Selects the tools to include in the MCP Server based on the provided options.
 */
export function selectTools(options?: McpOptions): McpTool[] {
  const includedTools = [codeTool()];
  if (options?.includeDocsTools ?? true) {
    includedTools.push(docsSearchTool);
  }
  return includedTools;
}

/**
 * Runs the provided handler with the given client and arguments.
 */
export async function executeHandler(
  handler: HandlerFunction,
  client: VraIaas,
  args: Record<string, unknown> | undefined,
) {
  return await handler(client, args || {});
}

export const readEnv = (env: string): string | undefined => {
  if (typeof (globalThis as any).process !== 'undefined') {
    return (globalThis as any).process.env?.[env]?.trim();
  } else if (typeof (globalThis as any).Deno !== 'undefined') {
    return (globalThis as any).Deno.env?.get?.(env)?.trim();
  }
  return;
};

export const readEnvOrError = (env: string): string => {
  let envValue = readEnv(env);
  if (envValue === undefined) {
    throw new Error(`Environment variable ${env} is not set`);
  }
  return envValue;
};

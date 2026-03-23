// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpTool, Metadata, ToolCallResult, asErrorResult, asTextContentResult } from './types';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

/**
 * A tool that runs code against a copy of the SDK.
 *
 * Instead of exposing every endpoint as its own tool, which uses up too many tokens for LLMs to use at once,
 * we expose a single tool that can be used to search for endpoints by name, resource, operation, or tag, and then
 * a generic endpoint that can be used to invoke any endpoint with the provided arguments.
 *
 * @param endpoints - The endpoints to include in the list.
 */
export function codeTool(): McpTool {
  const metadata: Metadata = { resource: 'all', operation: 'write', tags: [] };
  const tool: Tool = {
    name: 'execute',
    description:
      'Runs JavaScript code to interact with the API.\n\nYou are a skilled programmer writing code to interface with the service.\nDefine an async function named "run" that takes a single parameter of an initialized SDK client and it will be run.\nWrite code within this template:\n\n```\nasync function run(client) {\n  // Fill this out\n}\n```\n\nYou will be returned anything that your function returns, plus the results of any console.log statements.\nIf any code triggers an error, the tool will return an error response, so you do not need to add error handling unless you want to output something more helpful than the raw error.\nIt is not necessary to add comments to code, unless by adding those comments you believe that you can generate better code.\nAny variables you define won\'t live between successive uses of this call, so make sure to return or log any data you might need later.',
    inputSchema: { type: 'object', properties: { code: { type: 'string' } } },
  };
  const handler = async (client: any, args: any): Promise<ToolCallResult> => {
    const code = args.code as string;
    const log_lines: string[] = [];
    const err_lines: string[] = [];

    const capturedConsole = {
      log: (...args: any[]) => log_lines.push(args.map(String).join(' ')),
      info: (...args: any[]) => log_lines.push(args.map(String).join(' ')),
      warn: (...args: any[]) => log_lines.push('WARN: ' + args.map(String).join(' ')),
      error: (...args: any[]) => err_lines.push('ERROR: ' + args.map(String).join(' ')),
    };

    try {
      const execute = new Function(
        'client',
        'console',
        `
            ${code}
            ;return run(client);
        `,
      );

      const result = await execute(client, capturedConsole);

      const output = {
        result,
        ...(log_lines.length > 0 && { log_lines }),
        ...(err_lines.length > 0 && { err_lines }),
      };

      return asTextContentResult(output);
    } catch (e: any) {
      const output = {
        result: e.message || String(e),
        ...(log_lines.length > 0 && { log_lines }),
        ...(err_lines.length > 0 && { err_lines }),
      };
      return asErrorResult(JSON.stringify(output, null, 2));
    }
  };

  return { metadata, tool, handler };
}

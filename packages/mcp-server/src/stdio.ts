import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CLIOptions } from './options';
import { initMcpServer, newMcpServer } from './server';

export const launchStdioServer = async (options: CLIOptions) => {
  const server = newMcpServer();

  initMcpServer({
    server,
    clientOptions: {
      baseURL: options.baseURL,
      bearerToken: options.bearerToken,
    },
    mcpOptions: options,
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
};

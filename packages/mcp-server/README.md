# Vra Iaas TypeScript MCP Server

This directory contains the Model Context Protocol (MCP) server for vRealize Automation (vRA) IaaS. This server essentially acts as a bridge between an AI Assistant (like Claude Desktop) and your vRA appliance, allowing you to use natural language to execute programmatic vRA tasks, gather resources, and build automations.

## Quick Start (Claude Desktop)

This server supports auto-authentication. Instead of manually providing expiring Bearer tokens, the server will login to your vRA appliance with your credentials on startup, capture the `cspAuthToken`, and seamlessly inject it into your requests. 

All self-signed certificates are automatically bypassed.

### 1. Build the Integration

If you have just cloned the repository, or if you modify any `.ts` files inside this package, you must build the TypeScript SDK into executable JavaScript bundles:

```bash
# From the root of the repository, execute the build script (requires bash):
./scripts/build
```
> *(On Windows, you can achieve this by running `& "C:\Program Files\Git\bin\bash.exe" ./scripts/build` from PowerShell)*

### 2. Configure Claude Desktop

To connect Claude to this server, edit your Claude Desktop configuration file (typically located at `%APPDATA%\Claude\claude_desktop_config.json` on Windows or `~/Library/Application Support/Claude/claude_desktop_config.json` on MacOS):
It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export VRA_IAAS_BASE_URL="https://vra.example.com"
export VRA_IAAS_BEARER_TOKEN="My Bearer Token"
npx -y vra_iaas-mcp@latest
```

Alternatively, you can provide these as CLI arguments:

```sh
npx -y vra_iaas-mcp@latest --base-url "https://vra.example.com" --bearer-token "My Bearer Token"
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "vra_iaas_api": {
      "command": "node",
      "args": [
        "C:\\Absolute\\Path\\To\\vra-iaas-mcp-typescript\\packages\\mcp-server\\dist\\index.js"
      ],
      "command": "npx",
      "args": ["-y", "vra_iaas-mcp", "--base-url", "https://vra.example.com", "--bearer-token", "My Bearer Token"],
      "env": {
        "VRA_FQDN": "your-vra-appliance.local",
        "VRA_USERNAME": "your_username",
        "VRA_PASSWORD": "your_password"
        "VRA_IAAS_BASE_URL": "https://vra.example.com",
        "VRA_IAAS_BEARER_TOKEN": "My Bearer Token"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=vra_iaas-mcp&config=eyJuYW1lIjoidnJhX2lhYXMtbWNwIiwidHJhbnNwb3J0Ijoic3NlIiwidXJsIjoiaHR0cHM6Ly92cmEtaWFhcy5zdGxtY3AuY29tL3NzZSIsImVudiI6eyJWUkFfSUFBU19CRUFSRVJfVE9LRU4iOiJTZXQgeW91ciBWUkFfSUFBU19CRUFSRVJfVE9LRU4gaGVyZS4ifX0)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22vra_iaas-mcp%22%2C%22type%22%3A%22sse%22%2C%22url%22%3A%22https%3A%2F%2Fvra-iaas.stlmcp.com%2Fsse%22%2C%22env%22%3A%7B%22VRA_IAAS_BEARER_TOKEN%22%3A%22Set%20your%20VRA_IAAS_BEARER_TOKEN%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add vra_iaas_mcp_api --env VRA_IAAS_BEARER_TOKEN="Your VRA_IAAS_BEARER_TOKEN here." --transport sse https://vra-iaas.stlmcp.com/sse
```

> **Important**: You must provide the **Absolute Path** to the `packages/mcp-server/dist/index.js` file built in step 1.

### 3. Usage inside Claude

Force restart Claude Desktop (completely quit from your system tray and relaunch).

Start a new chat and ask Claude things like:
- *"List all of my vRA Storage Profiles."*
- *"Query the API docs and write a script to deploy a new virtual machine."*
- *"Show me my most recent deployments."*

Claude will use the "Code Tool" underneath to execute pure TypeScript code against this SDK in a secure sandbox, returning the live results directly to you in natural language!

---

## Code Mode Documentation

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server, your agent will write code against the TypeScript SDK, which will then be executed in an isolated sandbox. To accomplish this, the server exposes two tools to your agent:

- **Docs Search Tool**: Can be used to generically query for documentation about your API.
- **Execute Code Tool**: An execution environment where the agent can write TypeScript code against the SDK. The code is executed in a sandbox without web or filesystem access. Anything the code returns or prints is returned to the agent.

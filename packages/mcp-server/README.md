# vRealize Automation (vRA) TypeScript MCP Server

This directory contains the Model Context Protocol (MCP) server for vRealize Automation (vRA) IaaS. This server acts as a bridge between an AI Assistant (like Claude Desktop) and your vRA appliance, allowing you to use natural language to execute programmatic vRA tasks, gather resources, and build automations.

## Quick Start (Claude Desktop)

This codebase includes custom enhancements to support auto-authentication natively. Instead of manually providing expiring Bearer tokens, the server will login to your vRA appliance with your credentials on startup, capture the `cspAuthToken`, and seamlessly inject it into your requests. 

All self-signed certificates are automatically bypassed via `NODE_TLS_REJECT_UNAUTHORIZED='0'`.

### 1. Build the Integration

If you have just cloned the repository, or if you modify any `.ts` files inside this package, you must build the TypeScript SDK into executable JavaScript bundles.

From the root of the repository, execute the build script (requires bash):
```bash
./scripts/build
```
> *(On Windows, you can achieve this by running `& "C:\Program Files\Git\bin\bash.exe" ./scripts/build` from PowerShell)*

### 2. Configure Claude Desktop

To connect Claude to this server, edit your Claude Desktop configuration file (typically located at `%APPDATA%\Claude\claude_desktop_config.json` on Windows or `~/Library/Application Support/Claude/claude_desktop_config.json` on MacOS):

```json
{
  "mcpServers": {
    "vra_iaas_api": {
      "command": "node",
      "args": [
        "C:\\Absolute\\Path\\To\\vra-iaas-mcp-typescript\\packages\\mcp-server\\dist\\index.js"
      ],
      "env": {
        "VRA_FQDN": "your-vra-appliance.local",
        "VRA_USERNAME": "your_username",
        "VRA_PASSWORD": "your_password"
      }
    }
  }
}
```

> **Important Note**: You **must** provide the **Absolute Path** to the `packages/mcp-server/dist/index.js` file built in step 1. Using `npx -y vra_iaas-mcp` will download a remote generic copy of the API which does NOT contain the local authentication functionality!

### 3. Usage inside Claude

Restart Claude Desktop (completely quit from your system tray to ensure the MCP Server process is killed, then relaunch).

Start a new chat and ask Claude things like:
- *"List all of my vRA Storage Profiles."*
- *"Query the API docs and write a script to deploy a new virtual machine."*
- *"Show me my most recent deployments."*

Claude will use the "Code Tool" underneath to execute pure TypeScript code against this SDK in a secure sandbox, returning the live results directly to you in natural language!

---

## Code Mode Documentation

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server, your agent will write code against the TypeScript SDK, which will then be executed in an isolated sandbox. To accomplish this, the server exposes two tools to your agent:

- **Docs Search Tool**: Can be used to generically query for documentation about your API.
- **Execute Code Tool**: An execution environment where the agent can write TypeScript code against the locally-installed SDK. The code is executed locally in a sandbox without network access minus the initialized `VraIaas` SDK client. Anything the code returns or prints is evaluated and returned to the AI Assistant.

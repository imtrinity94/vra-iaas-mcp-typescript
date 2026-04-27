# vRealize Automation (vRA) TypeScript MCP Server

This directory contains the Model Context Protocol (MCP) server for vRealize Automation (vRA) IaaS. This server acts as a bridge between an AI Assistant (like Claude Desktop) and your vRA appliance, allowing you to use natural language to execute programmatic vRA tasks, gather resources, and build automations.

## Standard Configuration (All IDEs)

This server supports a standardized credential-based setup for all MCP clients:

- `VRA_FQDN`
- `VRA_USERNAME`
- `VRA_PASSWORD`

The server exchanges these credentials for an IaaS bearer token on startup.

### Common MCP config snippet

```json
{
  "mcpServers": {
    "vra_iaas-mcp": {
      "command": "npx",
      "args": ["-y", "vra_iaas-mcp"],
      "env": {
        "VRA_FQDN": "vra.example.local",
        "VRA_USERNAME": "your-username",
        "VRA_PASSWORD": "your-password"
      }
    }
  }
}
```

### Client locations

- **Cursor**: global MCP config (`~/.cursor/mcp.json` on macOS/Linux, `%USERPROFILE%\\.cursor\\mcp.json` on Windows)
- **VS Code**: MCP settings UI or `settings.json` MCP block
- **Claude Desktop**: `%APPDATA%\\Claude\\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
- **Antigravity**: MCP config file/UI using the same `mcpServers` JSON shape

### Local repository development

If you are working from source, build from the repository root:

```bash
./scripts/build
```

Then point your MCP client to the local entrypoint:

```json
{
  "mcpServers": {
    "vra_iaas-mcp-local": {
      "command": "node",
      "args": [
        "C:\\Absolute\\Path\\To\\vra-iaas-mcp-typescript\\packages\\mcp-server\\dist\\index.js"
      ],
      "env": {
        "VRA_FQDN": "vra.example.local",
        "VRA_USERNAME": "your-username",
        "VRA_PASSWORD": "your-password"
      }
    }
  }
}
```

For self-signed certificates in lab environments, add:

```json
{
  "NODE_TLS_REJECT_UNAUTHORIZED": "0"
}
```

---

## Code Mode Documentation

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server, your agent will write code against the TypeScript SDK, which will then be executed in an isolated sandbox. To accomplish this, the server exposes two tools to your agent:

- **Docs Search Tool**: Can be used to generically query for documentation about your API.
- **Execute Code Tool**: An execution environment where the agent can write TypeScript code against the locally-installed SDK. The code is executed locally in a sandbox without network access minus the initialized `VraIaas` SDK client. Anything the code returns or prints is evaluated and returned to the AI Assistant.

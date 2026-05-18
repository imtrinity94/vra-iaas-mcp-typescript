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

## Getting Started - Quick Start

### 1. Build the MCP Server

From the repository root:

```bash
# Build all packages
./scripts/build

# Or build just the MCP server
cd packages/mcp-server
npm run build
```

### 2. Set Environment Variables

Before running the server, set your vRA credentials:

#### On PowerShell:
```powershell
$env:VRA_FQDN = "vra.vcf.lab"
$env:VRA_USERNAME = "idmadmin"
$env:VRA_PASSWORD = "YourPassword"

# For self-signed certificates (lab environments)
$env:NODE_TLS_REJECT_UNAUTHORIZED = "0"
```

#### On macOS/Linux:
```bash
export VRA_FQDN="vra.vcf.lab"
export VRA_USERNAME="idmadmin"
export VRA_PASSWORD="YourPassword"
export NODE_TLS_REJECT_UNAUTHORIZED="0"
```

### 3. Run the MCP Server as Stdio Server

```bash
# From the mcp-server directory
node dist/index.js
```

The server will:
1. Authenticate using your username/password
2. Generate a bearer token automatically
3. Start listening for MCP requests on stdio
4. Initialize with 2 available tools: `execute` and `search_docs`

**Output:**
```
Successfully generated vRA IaaS bearer token from credentials.
MCP Server starting with 2 tools: [ 'execute', 'search_docs' ]
MCP Server running on stdio
```

### 4. Query the MCP Server

Once running, you can send MCP protocol requests. Example:

**List all deployments:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "execute",
    "arguments": {
      "code": "async function run(client) {\n  const deployments = await client.iaas.api.deployments.list();\n  console.log(JSON.stringify(deployments, null, 2));\n  return deployments;\n}"
    }
  }
}
```

**Query blueprints via REST API:**
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "execute",
    "arguments": {
      "code": "async function run(client) {\n  const blueprints = await client.request({ method: 'GET', path: '/blueprint/api/blueprints/' });\n  return blueprints;\n}"
    }
  }
}
```

### 5. Available Resources

The MCP server provides access to extensive vRA IaaS APIs:

**Infrastructure:**

**Cloud Management:**

**Additional APIs:**
---

## Getting Started - Complete Setup Guide

### Prerequisites

- **Node.js** 18+ installed
- **Git** installed
- vRA/Aria Automation 8.x instance with credentials
- For self-signed certificates: Node.js will disable certificate verification during execution

---

## Step-by-Step Installation & Running

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/imtrinity94/vra-iaas-mcp-typescript.git

# Navigate to the repository
cd vra-iaas-mcp-typescript
```

### Step 2: Install Dependencies

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install all dependencies
pnpm install
```

### Step 3: Build the MCP Server

```bash
# Option A: Build everything from root
./scripts/build

# Option B: Build just the MCP server
cd packages/mcp-server
pnpm run build
cd ../..
```

### Step 4: Set Up Your vRA Credentials

Choose your operating system:

#### **Windows (PowerShell)**

```powershell
# Navigate to the mcp-server directory
cd packages\mcp-server

# Set environment variables for this session
$env:VRA_FQDN = "vra.vcf.lab"
$env:VRA_USERNAME = "idmadmin"
$env:VRA_PASSWORD = "VMware1!"
$env:NODE_TLS_REJECT_UNAUTHORIZED = "0"

# Verify environment variables are set
Write-Host "VRA_FQDN: $($env:VRA_FQDN)"
Write-Host "VRA_USERNAME: $($env:VRA_USERNAME)"
Write-Host "VRA_PASSWORD: (set)"
```

#### **Windows (Command Prompt - cmd.exe)**

```cmd
cd packages\mcp-server

set VRA_FQDN=vra.vcf.lab
set VRA_USERNAME=idmadmin
set VRA_PASSWORD=VMware1!
set NODE_TLS_REJECT_UNAUTHORIZED=0

echo VRA_FQDN=%VRA_FQDN%
echo VRA_USERNAME=%VRA_USERNAME%
```

#### **macOS/Linux (Bash/Zsh)**

```bash
# Navigate to the mcp-server directory
cd packages/mcp-server

# Set environment variables
export VRA_FQDN="vra.vcf.lab"
export VRA_USERNAME="idmadmin"
export VRA_PASSWORD="VMware1!"
export NODE_TLS_REJECT_UNAUTHORIZED="0"

# Verify
echo "VRA_FQDN: $VRA_FQDN"
echo "VRA_USERNAME: $VRA_USERNAME"
```

### Step 5: Run the MCP Server

```bash
# From the mcp-server directory
node dist/index.js
```

**Expected Output:**
```
(node:12460) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable...
Successfully generated vRA IaaS bearer token from credentials.
MCP Server starting with 2 tools: [ 'execute', 'search_docs' ]
MCP Server running on stdio
```

The server is now running and ready to accept requests! ✅

---

## Using the MCP Server

### Authentication Flow

When you run the MCP server with username/password credentials:

1. **Credentials Provided**: `VRA_FQDN`, `VRA_USERNAME`, `VRA_PASSWORD` environment variables
2. **CSP Login**: Server calls `/csp/gateway/am/api/login` to exchange credentials for a refresh token
3. **IaaS Token**: Server calls `/iaas/api/login` to get the IaaS bearer token
4. **Automatic Setup**: Bearer token is stored in `VRA_IAAS_BEARER_TOKEN` environment variable
5. **Ready to Use**: MCP server starts and listens for requests

No need to manually manage bearer tokens! 🔐

### Example Queries

#### Query 1: List All Deployments

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "execute",
    "arguments": {
      "code": "async function run(client) {\n  const deployments = await client.iaas.api.deployments.list();\n  console.log(JSON.stringify(deployments, null, 2));\n  return deployments;\n}"
    }
  }
}
```

#### Query 2: List All Blueprints

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "execute",
    "arguments": {
      "code": "async function run(client) {\n  const blueprints = await client.request({ method: 'GET', path: '/blueprint/api/blueprints/' });\n  console.log(JSON.stringify(blueprints.content, null, 2));\n  return blueprints.content;\n}"
    }
  }
}
```

#### Query 3: List All Machines

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "execute",
    "arguments": {
      "code": "async function run(client) {\n  const machines = await client.iaas.api.machines.list();\n  console.log(JSON.stringify(machines, null, 2));\n  return machines;\n}"
    }
  }
}
```

#### Query 4: List All Projects

```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "tools/call",
  "params": {
    "name": "execute",
    "arguments": {
      "code": "async function run(client) {\n  const projects = await client.iaas.api.projects.list();\n  console.log(JSON.stringify(projects, null, 2));\n  return projects;\n}"
    }
  }
}
```

### Available Resources

The MCP server provides access to extensive vRA IaaS and Blueprint APIs:

**Infrastructure Management:**
- Deployments, Machines, Networks, Storage
- Projects, Zones, Regions
- Block Devices, Load Balancers

**Cloud Account Management:**
- Cloud Accounts (vSphere, AWS, Azure, GCP, NSX-T, NSX-V, VMC, AVI LB)
- Cloud account health checks and enumeration

**Design & Configuration:**
- Blueprints (`/blueprint/api/blueprints/`)
- Flavor Profiles, Image Profiles
- Storage Profiles, Security Groups
- Network Profiles, Network IP Ranges

**Additional Features:**
- Tags, Request Tracker
- Configuration Properties
- IPAM Integrations
- Data Collectors
---

## Code Mode Documentation

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server, your agent will write code against the TypeScript SDK, which will then be executed in an isolated sandbox. To accomplish this, the server exposes two tools to your agent:

- **Docs Search Tool**: Can be used to generically query for documentation about your API.
- **Execute Code Tool**: An execution environment where the agent can write TypeScript code against the locally-installed SDK. The code is executed locally in a sandbox without network access minus the initialized `VraIaas` SDK client. Anything the code returns or prints is evaluated and returned to the AI Assistant.

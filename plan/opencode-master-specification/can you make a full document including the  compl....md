# **Opencode Master Specification: V5 Agentic Core**

Version: 5.0 (Compilation of Architecture, Infrastructure, and Protocol Specs)  
Date: September 26, 2025  
Status: Approved Architectural Blueprint for Development

## **1\. Executive Summary and Architectural Overview**

This document defines the final architectural blueprint for Opencode V5, transforming the platform into a decentralized, production-grade, and cross-platform autonomous coding environment. The architecture is layered to support **Visual Editing Agents**, local LLM integration (**Ollama**), and seamless **cross-platform connectivity** (Obsidian mobile/desktop).

The system is defined by three interconnected, decoupled layers:

1. **Agent Infrastructure Layer:** Defines isolated, reproducible environments for agent execution (vaults/, pnpm, Docker).  
2. **Distributed Agent Interface (DAI) Layer:** Defines the secure network bridge (RPC/WebSockets) for cross-platform access.  
3. **Decentralized Open Immutable Collaboration Layer (DOICL):** Ensures verifiable history and shared workflows using Content Addressing (CIDs).

## **2\. Layer 1: Agent Infrastructure and Isolation**

The Agent Infrastructure Layer guarantees that autonomous agent activity is secure, reproducible, and isolated from the main user vault via strict folder structure and tooling management.

### **2.1. Vault Topology**

A new top-level vaults/ directory is mandatory, housing all isolated agent and user workspaces.

/opencode-project-root  
├── vaults/  
│   ├── agents/  
│   │   ├── agent-coding-vault-1/  \<-- Isolated execution environment (pnpm workspace)  
│   │   │   ├── .obsidian/         \<-- Agent-specific configuration  
│   │   │   ├── .npmrc             \<-- Production dependency configuration.  
│   │   │   ├── vault-context/     \<-- MCP-serialized state (NLP, tinyneat, Seaptre context).  
│   │   │   └── code-projects/     \<-- Execution environment for generated code/visual projects.  
│   │   │   └── .immutable-history/ \<-- CID logs for DOICL.  
│   │   │  
│   └── templates/  
│       └── base-agent-vault/

### **2.2. Production Tooling and Environment Isolation**

| Tool | Purpose | Mechanism |
| :---- | :---- | :---- |
| **pnpm** | **Dependency Isolation** | Used within each agent vault for fast, reproducible, and secure dependency management. Each vault is treated as an **isolated pnpm workspace**. |
| **Docker** | **Execution Isolation** | Optional containerization for complex OS/compiler needs. The opencode-cli manages volume mounting and execution via the ExecuteInDocker RPC command. |
| **Ollama** | **Local LLM Integration** | Primary model host. Agents interact with Ollama via the opencode-cli for code generation and reasoning. |
| **wordnet, wink-nlp** | **Contextual Deep Understanding** | Used to enrich the Agent/User Vault Context, which is stored locally in vault-context/ before being serialized (Seaptre context). |
| **tinyneat** | **Autonomous Evolution** | Manages the agent's decision-making logic. The resulting network state is serialized as a key component of the shareable MCP context. |

### **2.3. Vault Context (seaptre) Isolation**

The **Opencode Plugin** (Daemon/Orchestrator) is responsible for synchronizing the high-fidelity context (goals, system prompts, TetraNode summaries) from the user's main vault into the isolated agent vault's vault-context/ directory as structured Markdown/JSON files. The agent reads this local data, ensuring a self-contained view of the task.

## **3\. Layer 2: Distributed Agent Interface (DAI) & Protocol**

The DAI Layer enables network access to the Agent Core, allowing desktop and mobile Obsidian clients to securely interact with and monitor agent execution. All communication adheres to the **Model Context Protocol (MCP) SDK**.

### **3.1. Network Architecture (Agent Communication Server \- ACS)**

The **opencode-cli** functions as the DAI Network Server, and the **opencode-plugin** acts as the client/controller.

| Component | Detail | Requirement |
| :---- | :---- | :---- |
| **Server Host** | opencode-cli (Persistent Network Server) | Listens on a configurable, secure port for persistent, multi-client access. |
| **Client Host** | opencode-plugin (Desktop/Mobile) | Connects to the local or remote DAI server via secure WebSockets/HTTP. |
| **Protocol** | WebSockets/HTTP (Secured) | **MCP SDK** must be used to encapsulate all messages, ensuring standardized and tool-aware messaging. |
| **Security** | API Key / Shared Secret | A cryptographic secret shared between the plugin and the authorized agent processes. |

### **3.2. Agent Communication (RPC Interfaces)**

#### **A. Core Agent Tools (Agent calls into the Plugin/Server)**

| Endpoint/Method | Input | Purpose |
| :---- | :---- | :---- |
| Tool:GetVaultContext | VaultID: string | Retrieves the current state and structured goals of the target vault. |
| Tool:ExecuteShell | Command: string, VaultID: string | Executes a shell command (e.g., pnpm install) within the isolated vault's root. |
| Tool:CreateNote, Tool:UpdateNote | FilePath: string, Content/Changes | Programmatic file interaction within the vault. |
| Tool:ReportStatus | Status: AgentStatus, Message: string | Sends real-time progress updates back to the UI. |
| **Tool:VisualEditingHook (TBD)** | Defined Visual Editing Command | Enables agents to inspect, capture, and manipulate visual UI targets within code-projects/. |

#### **B. UI/User Commands (Plugin/Controller calls to the Agent/Client)**

| Command Name | Data | Description |
| :---- | :---- | :---- |
| Command:StartAgent | Goal: string, VaultID: string | Triggers the external agent process to begin its reasoning loop on a new task. |
| Command:InterruptAgent | Force: boolean | Sends a signal to the agent process to pause or terminate its current task. |
| Command:ToolOverride | ToolName: string, Arguments: JSON | Allows a user to override agent decisions and manually inject a tool call result. |

### **3.3. Mandatory TypeScript Data Models**

The following MCP-compliant interfaces must be strictly implemented for all communication.

/\*\*  
 \* IAgentVaultContext: Represents the structured context provided to the agent (Seaptre Context).  
 \*/  
interface IAgentVaultContext {  
    vaultId: string;  
    currentGoal: string;      // High-level objective.  
    systemPrompt: string;     // LLM system-level constraints and identity.  
    stateSummary: string;     // Summarized state of existing project code/notes.  
    activeFiles: string\[\];    // Files currently being edited or considered.  
    availableTools: string\[\]; // List of available RPC endpoints/tools.  
}

/\*\*  
 \* IToolCommand: The structured object an Agent sends to request tool execution.  
 \*/  
interface IToolCommand {  
    id: string; // Unique ID for tracking request/response pairs  
    commandName: 'GetVaultContext' | 'ExecuteShell' | 'CreateNote' | 'UpdateNote' | 'ReportStatus' | 'VisualEditingHook';  
    arguments: { \[key: string\]: any; }; // Payload matching the required RPC endpoint  
    timestamp: number;  
}

## **4\. Layer 3: Decentralized Open Immutable Collaboration Layer (DOICL)**

This layer provides the "open" and "immutable" properties of the environment using Content Addressing.

### **4.1. Content-Addressed Vault State (CAVS)**

When an agent successfully completes a work unit (e.g., code passes tests, or a visual edit is complete), the opencode-cli performs a CAVS Commit:

1. **Bundle:** The relevant state (code-projects/, vault-context/) is bundled.  
2. **Hash:** A unique **CID (Content Identifier)** is generated for the bundle.  
3. **Publish:** The CID is published (e.g., to an IPFS network), and the local .immutable-history/manifest.json is updated, creating an unchangeable record.

### **4.2. Shared Workflows and MCP Server Management**

* **Shared Workflow:** A workflow is defined by its immutable CID. Any user can load this CID into a new vault, guaranteeing they receive the exact, verifiable state the original agent used.  
* **External MCP Server Management:** The Obsidian UI will provide a dashboard to register and interact with external MCP servers (for managing things like Minecraft servers) through the Agent Core's DAI connection.

## **5\. Implementation Checklist**

The development effort should follow the priority of these key areas:

1. **DAI Server Implementation:** Build the initial opencode-cli server foundation (persistent, secure port listening).  
2. **Protocol Implementation:** Integrate the MCP SDK and implement the **IToolCommand** messaging for the core RPC endpoints (GetVaultContext, ExecuteShell).  
3. **Vault Lifecycle Management:** Implement the core logic within the plugin for vault creation, isolation, and tooling (pnpm/Docker) execution control.  
4. **DOICL Integration:** Implement the CAVS Commit process and CID publishing functionality within the opencode-cli.  
5. **Visual Tooling Definition & Implementation:** Finalize and implement the VisualEditingHooks for agents.
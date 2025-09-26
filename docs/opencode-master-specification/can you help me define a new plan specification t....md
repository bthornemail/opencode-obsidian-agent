# **Opencode Architectural Spec v3: Production Dual-App & MCP SDK Integration**

This specification details the architecture for a production-grade Opencode system, featuring a dual application model (Obsidian UI for control, CLI/External Agent for execution) and deep integration with the Model Context Protocol (MCP) TypeScript SDK.

## **1\. Vault Topology and Folder Structure**

The vault structure now explicitly includes project-level configuration for production environments.

/opencode-project-root  
├── vaults/  
│   ├── agents/                   \<-- Dedicated Agent/Execution Vaults (isolated)  
│   │   ├── agent-coding-vault-1/  \<-- Agent's live coding workspace  
│   │   │   ├── .obsidian/  
│   │   │   ├── .npmrc             \<-- \*\*Production-grade configuration (registries, auth)\*\*  
│   │   │   ├── vault-context/     \<-- Structured context (seaptre data, goals, NEAT models)  
│   │   │   └── code-projects/     \<-- Target directory for generated code  
│   │   │  
│   │   └── agent-testing-vault-2/  
│   │  
│   ├── users/                    \<-- Standard User Vaults (Observation/Interaction)  
│   │   └── user-main-vault/  
│   │  
│   └── templates/  
│       └── base-agent-vault/      \<-- Gold standard template for new agent vaults  
│  
├── opencode-plugin/              \<-- The main Obsidian plugin (UI & RPC Server)  
├── opencode-cli/                 \<-- The external, agentic CLI application (MCP Client)  
└── package.json                  \<-- Root pnpm workspace file  

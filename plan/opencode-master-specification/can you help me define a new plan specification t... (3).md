# **Opencode Architectural Spec v4: Decentralized, Immutable Agentic Core**

This specification details the architecture for a decentralized, production-grade Opencode system. It introduces a Content-Addressing layer to ensure immutability and defines the Model Context Protocol (MCP) as the standardized interface for shared, verifiable agent workflows.

## **1\. Vault Topology and Decentralized Structure**

The vault structure is enhanced to track and publish immutable state changes, forming a cryptographically secured history for collaboration.

/opencode-project-root  
├── vaults/  
│   ├── agents/  
│   │   ├── agent-coding-vault-1/  \<-- Agent's live coding workspace  
│   │   │   ├── .obsidian/  
│   │   │   ├── .npmrc  
│   │   │   ├── vault-context/     \<-- MCP-serialized state (seaptre, tinyneat, NLP)  
│   │   │   └── code-projects/  
│   │   │   └── .immutable-history/ \<-- \*\*New:\*\* Stores cryptographic hash logs (CIDs)  
│   │   │       └── manifest.json    \<-- Log of all committed states (CID, timestamp, agent-ID)  
│   │   │  
│   │   └── agent-testing-vault-2/  
│   │  
│   └── templates/  
│       └── base-agent-vault/  
│  
├── opencode-plugin/              \<-- Obsidian UI / RPC Server / State Controller  
└── opencode-cli/                 \<-- External Agentic Executor / Content Publisher  

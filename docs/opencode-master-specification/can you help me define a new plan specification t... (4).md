# **Opencode Architectural Spec v5: Distributed Visual Agent Core**

This specification details the architecture for a decentralized, production-grade Opencode system, now extended to support visual editing and cross-platform access via a persistent network connection (The Distributed Agent Interface Layer).

## **1\. Vault Topology and Decentralized Structure**

The decentralized structure is maintained, tracking immutable state changes using Content Addressing for secure history and collaboration.

/opencode-project-root  
├── vaults/  
│   ├── agents/  
│   │   ├── agent-coding-vault-1/  \<-- Agent's live coding workspace  
│   │   │   ├── .obsidian/  
│   │   │   ├── .npmrc  
│   │   │   ├── vault-context/     \<-- MCP-serialized state (seaptre, tinyneat, NLP)  
│   │   │   └── code-projects/  
│   │   │   └── .immutable-history/ \<-- Stores cryptographic hash logs (CIDs)  
│   │   │       └── manifest.json  
│   │   │  
│   │   └── agent-testing-vault-2/  
│   │  
│   └── templates/  
│       └── base-agent-vault/  
│  
├── opencode-plugin/              \<-- Obsidian UI / DAI Network Client  
└── opencode-cli/                 \<-- External Agentic Executor / DAI Network Server / Content Publisher  

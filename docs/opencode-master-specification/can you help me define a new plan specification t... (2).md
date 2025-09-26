# **Plan Specification: Autonomous Agent Infrastructure (Phase 2\)**

This specification defines the foundational folder structure and component roles necessary to support multiple isolated "Vaults" and integrate external development tooling (pnpm, Docker) for autonomous coding agents.

## **1\. Top-Level Folder Structure**

The core requirement is a new vaults folder. This structure allows the main application/plugin to manage a repository of isolated Obsidian environments.

/opencode-project-root  
├── vaults/  
│   ├── opencode-ai-agent-vault/  \<-- Agent's designated workspace (pnpm workspace 1\)  
│   │   ├── .obsidian/            \<-- Agent-specific configuration & state  
│   │   ├── vault-context/        \<-- Context files (e.g., System Prompts, Agent State, Goals)  
│   │   ├── code-projects/        \<-- Execution environment for generated code  
│   │   └── package.json          \<-- Agent's local dependencies (pnpm managed)  
│   │  
│   ├── user-vault-1/             \<-- Standard User Vault (for observation/interaction)  
│   │   └── ...  
│   │  
│   └── templates/  
│       └── base-agent-vault/     \<-- Template for quick vault bootstrapping  
│  
├── opencode-plugin/              \<-- The main Obsidian plugin (The Daemon/Orchestrator)  
│   └── src/  
│  
└── package.json                  \<-- Root pnpm workspace file (if using mono-repo setup)

## **2\. Infrastructure Component Roles**

| Component | Role | Integration Strategy |
| :---- | :---- | :---- |
| **opencode-ai-agent-vault** | The isolated execution environment where the AI agent operates. It houses the seaptre vault context (structured context notes) and generated code. | Must be treated as an **isolated pnpm workspace**. This ensures that any npm install operations performed by the agent do not conflict with or compromise the main Obsidian application dependencies. |
| **pnpm** | **Package Manager for Isolation.** Used to manage dependencies *within* the agent vault. It allows for fast, reproducible, and isolated dependency installations necessary for coding tasks. | The **Opencode Plugin** will execute pnpm commands via Node.js child processes within the agent vault directory (/vaults/opencode-ai-agent-vault). |
| **Docker (Optional)** | **Environment Containerization.** If the coding environment requires complex OS-level dependencies (e.g., Python, specific compilers), the agent vault can be mounted as a volume into a pre-configured Docker container for execution. | The Opencode Plugin exposes a Tool Command (ExecuteInDocker) via RPC, handling image build/pull and volume mounting. |
| **Opencode Plugin** | **The Daemon/Orchestrator.** This single plugin runs in the main Obsidian instance. It handles communication with the agent (via RPC), manages vault creation/lifecycle, and executes pnpm/Docker tooling. | This plugin hosts the **Agent Communication Server (see Protocol Spec)** to receive commands from external agent processes. |

## **3\. Vault Context and seaptre Isolation**

The **seaptre vault context** will be physically stored as a set of structured Markdown/JSON files within the agent vault's vault-context/ folder.

1. **Source:** The Opencode Plugin retrieves the relevant context (e.g., current goal, system prompt, TetraNode summaries) from the **user's vault** (or an external source).  
2. **Injection:** The plugin copies or synchronizes this structured context into the isolated opencode-ai-agent-vault/vault-context/ directory.  
3. **Agent Use:** The external AI agent process reads these local files, ensuring the agent has a self-contained, high-fidelity view of the task and environment without requiring complex database queries during its reasoning loop.

This architecture ensures the agent's work and dependencies are isolated from the main user environment, meeting security and stability requirements.
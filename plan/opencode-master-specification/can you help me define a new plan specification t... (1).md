# **Plan Specification: Agent Communication and RPC Protocol**

This specification defines the communication layer, allowing external AI agents, LLM wrappers, and potentially other tools to interact with the core Obsidian environment (the Opencode Plugin) programmatically.

## **1\. Agent Communication Server (ACS)**

The **Opencode Plugin** (running in the main Obsidian instance) must host a local communication server to accept Remote Procedure Calls (RPCs).

| Feature | Detail | Purpose |
| :---- | :---- | :---- |
| **Protocol** | HTTP (REST) or WebSockets | HTTP is simpler for stateless commands; WebSockets preferred for real-time bidirectional communication and status streaming. |
| **Host** | 127.0.0.1 (Localhost) | Ensures security by only accepting connections from the local machine. |
| **Port** | Configurable (e.g., 34700\) | Must be configurable in the Opencode Plugin settings. |
| **Authentication** | API Key / Shared Secret | A cryptographic secret generated upon plugin activation and shared only with authorized child agent processes to prevent unauthorized RPC execution. |

## **2\. Remote Procedure Call (RPC) Interfaces**

The core of the system is the ability for the agent to call functions exposed by the Obsidian environment (Tools) and for the UI to trigger the agent.

### **A. Core Agent Tools (RPC Endpoints)**

These are the functions the **Agent calls into the Plugin** (Server).

| Endpoint/Method | Input (Agent's Command) | Output (Plugin's Response) | Description |
| :---- | :---- | :---- | :---- |
| Tool:GetVaultContext | VaultID: string | VaultContext: IAgentVaultContext | Retrieves the current state and goals of the target vault (e.g., the seaptre context data). |
| Tool:ExecuteShell | Command: string, VaultID: string | Stdout: string, Stderr: string, ExitCode: number | Executes a shell command (e.g., pnpm install, node index.js) within the designated agent vault's root directory. |
| Tool:CreateNote | FilePath: string, Content: string, VaultID: string | Success: boolean, NoteURI: string | Creates a new Markdown note/file within the target agent vault. |
| Tool:UpdateNote | FilePath: string, Changes: string | Success: boolean | Atomically updates a note's content or frontmatter. |
| Tool:ReportStatus | Status: AgentStatus, Message: string | Success: boolean | Allows the agent to report its current activity (e.g., "Planning phase," "Executing Test Suite") back to the user's main UI. |

### **B. UI/User Commands (Plugin to Agent)**

These are the functions the **Plugin calls to the Agent** (Client, likely via WebSocket push or polling for simplicity).

| Command Name | Data | Description |
| :---- | :---- | :---- |
| Command:StartAgent | Goal: string, VaultID: string | Triggers the external agent process to start its reasoning loop on a new task. |
| Command:InterruptAgent | Force: boolean | Sends a signal to the agent process to pause or terminate its current task. |
| Command:ToolOverride | ToolName: string, Arguments: JSON | Allows a user to override agent decisions and manually inject a tool call result. |

## **3\. TypeScript Data Model Interfaces**

To ensure structured data exchange, the following TypeScript interfaces must be strictly adhered to by both the Obsidian Plugin (ACS) and the external Agent processes.

/\*\*  
 \* IAgentVaultContext: Represents the structured context provided to the agent.  
 \* This is the digitized 'seaptre vault context'.  
 \*/  
interface IAgentVaultContext {  
    vaultId: string;  
    // The current high-level objective derived from user input.  
    currentGoal: string;  
    // System-level constraints and identity for the LLM.  
    systemPrompt: string;  
    // Summarized state of existing project code and relevant vault notes (TetraNode summaries).  
    stateSummary: string;  
    // Array of files that are currently being edited or considered.  
    activeFiles: string\[\];  
    // List of available ToolCommands the agent can execute (mirroring the RPC endpoints).  
    availableTools: string\[\];  
}

/\*\*  
 \* IToolCommand: The structured object an Agent sends to the Opencode Plugin's RPC server  
 \* to request execution of an Obsidian-related tool or shell command.  
 \*/  
interface IToolCommand {  
    id: string; // Unique ID for tracking request/response pairs  
    commandName: 'GetVaultContext' | 'ExecuteShell' | 'CreateNote' | 'UpdateNote' | 'ReportStatus';  
    arguments: {  
        \[key: string\]: any; // Payload matching the required RPC endpoint  
    };  
    timestamp: number;  
}

This dual-specification approach clearly separates the physical implementation (folder structure, pnpm) from the logical flow (RPC and data contracts), providing a robust blueprint for development.
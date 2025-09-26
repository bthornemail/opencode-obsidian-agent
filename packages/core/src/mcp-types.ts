/**
 * IAgentVaultContext: Represents the structured context provided to the agent (Seaptre Context).
 */
export interface IAgentVaultContext {
    vaultId: string;
    currentGoal: string;      // High-level objective.
    systemPrompt: string;     // LLM system-level constraints and identity.
    stateSummary: string;     // Summarized state of existing project code/notes.
    activeFiles: string[];    // Files currently being edited or considered.
    availableTools: string[]; // List of available RPC endpoints/tools.
}

export type AgentStatus = "planning" | "executing" | "waiting" | "finished" | "error";

export type ToolCommandName = 'GetVaultContext' | 'ExecuteShell' | 'CreateNote' | 'UpdateNote' | 'ReportStatus' | 'CreateAgentVault' | 'SetVaultContext' | 'EnrichContext' | 'CommitState' | 'GetAllNodes' | 'ProcessFile' | 'PublishNode' | 'GetHistoryProof' | 'WikifyAndTag';

/**
 * IToolCommand: The structured object an Agent sends to request tool execution.
 */
export interface IToolCommand {
    id: string; // Unique ID for tracking request/response pairs
    commandName: ToolCommandName;
    arguments: { [key: string]: any; }; // Payload matching the required RPC endpoint
    timestamp: number;
}

# Project Directive: The Tetrahedral Shared Brain

**Version:** 1.0
**Status:** Ready for Development (Phase 4)

---

## 1. High-Level Objective

Your primary task is to begin the implementation of **Phase 4: Agentic Automation**. This involves onboarding the first autonomous AI agent to the Tetrahedral Shared Brain network. The agent will leverage the existing infrastructure to interact with and verify nodes.

The complete architectural vision is detailed in the project's single source of truth:

**Primary Reference: `TETRAHEDRAL_BRAIN_REFERENCE.md`**

---

## 2. Immediate Task: Implement the Verification Agent

Your starting point is to create an agent that can autonomously monitor and verify the integrity of the network.

### Task: Create the Verification Agent
- **Location**: Create a new file for the agent, for example, at `.opencode/plugin/verification_agent.ts`.
- **Requirements**:
    1.  The agent should be implemented as an **Opencode Plugin**.
    2.  On startup, the agent should use the `OpencodeAgentClient` to connect to the WebSocket server.
    3.  The agent must listen for incoming `node_update` messages.
    4.  Upon receiving a `node_update` message, the agent will **autonomously perform the verification process**:
        a. Request the full graph state to get the `historyRoot` for the updated node.
        b. Request the Merkle inclusion proof for the specific update from the server.
        c. Use the `verifyProof` utility to validate the proof.
        d. Log the result of the verification (e.g., "Agent verification successful for node [nodeId]" or "Agent verification FAILED for node [nodeId]").

This task will demonstrate the system's capacity for autonomous, trustless verification by an AI agent, a core goal of the project.

---

## 3. Key Files & Technologies

- **Primary Blueprint**: `TETRAHEDRAL_BRAIN_REFERENCE.md`
- **Agent Location**: `.opencode/plugin/verification_agent.ts` (to be created)
- **Client Logic**: `src/client/index.ts`
- **Verification Logic**: `src/core/verification.ts`
- **Key Libraries**:
    - `@opencode-ai/plugin`: For the agent's plugin structure.
    - `ethers`: For cryptographic operations.

---

## 4. Agent Instructions

1.  **Review the Opencode Plugin documentation** to structure your agent correctly.
2.  **Utilize Existing Code**: Import and use the `OpencodeAgentClient` and `verifyProof` functions. Do not reimplement them.
3.  **Focus on Automation**: The agent's primary role is to perform the verification workflow without human intervention.
4.  **Provide Clear Logging**: The agent's output should clearly state which node it is verifying and what the outcome was.

You are now cleared to begin programming Phase 4.
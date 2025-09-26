# Project Directive: V5 Agentic Core Refactor

**Version:** 5.0
**Status:** Ready for Development (Milestone 1)

---

## 1. High-Level Objective

The project's objective has evolved. The new primary task is to refactor the existing proof-of-concept into a production-grade, decentralized, and autonomous coding environment based on the **Opencode V5 Master Specification**.

This involves a significant architectural shift to a dual-application model, introducing isolated agent environments, and standardizing all communication via the Model Context Protocol (MCP).

## 2. Primary References

All development must adhere to the architecture detailed in the following documents:

1.  **Master Specification**: The complete architectural blueprint is defined in the files located at `plan/opencode-master-specification/`.
2.  **Core Concepts**: The fundamental principles of the Tetrahedral Node are documented in `TETRAHEDRAL_BRAIN_REFERENCE.md`.

## 3. Implementation Plan Summary

The refactoring will proceed through the following major milestones:

*   **Milestone 1: Establish the Dual-Application Infrastructure**
    *   Restructure the project to support `opencode-cli` (backend) and `opencode-plugin` (frontend) in a `pnpm` workspace. Establish the new `vaults/` directory.

*   **Milestone 2: Implement the Model Context Protocol (MCP)**
    *   Integrate the official MCP TypeScript SDK and refactor all network communication to use its standardized interfaces (`IToolCommand`, `IAgentVaultContext`).

*   **Milestone 3: Implement Agent Lifecycle and Tooling**
    *   Build the logic for bootstrapping new agent vaults and securely executing sandboxed shell commands (like `pnpm install` and `docker run`).

*   **Milestone 4: Integrate Advanced Capabilities (NLP & DOICL)**
    *   Add the specified NLP libraries for context enrichment and implement the immutable history layer (DOICL) by generating and logging CIDs for completed work.

## 4. Immediate Task

The immediate task is to begin **Milestone 1, Task 1.1: Project Restructuring**.

This involves:
1.  Creating the new directories: `vaults/agents/`, `vaults/templates/base-agent-vault/`, and `opencode-cli/`.
2.  Moving the existing plugin source code into a new root-level `opencode-plugin/` directory.
3.  Reconfiguring the root `package.json` to define a `pnpm` workspace.

## 5. Agent Instructions

1.  **Adhere to the Master Specification**: All implementation details must follow the architecture described in the `plan/opencode-master-specification/` documents.
2.  **Follow the Milestones Sequentially**: Do not skip ahead. The successful completion of each milestone is foundational for the next.
3.  **Begin with Restructuring**: Your first action is to execute the file and directory changes outlined in Task 1.1.

You are now cleared to begin the V5 refactoring.

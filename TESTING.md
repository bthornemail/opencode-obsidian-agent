Test Plan: Opencode V5+ Core Functionality

  This plan guides you through setting up and testing the core features of the Opencode V5+ system, including vault creation, agent runtime, plugin 
  integration, and key agentic workflows.

  Prerequisites:

   1. Node.js & pnpm: Ensure Node.js (v16+) and pnpm are installed on your system.
   2. Docker: Ensure Docker Desktop or Docker Engine is running if you plan to test the --docker option for the agent runtime.
   3. IPFS Daemon (Optional): If you want to test IPFS pinning, ensure an IPFS daemon (e.g., ipfs daemon from go-ipfs) is running and accessible on 
      http://localhost:5001.

  ---

  Step 1: Initial Setup & Build

   1. Install Monorepo Dependencies:
   1     pnpm install
   2. Build All Packages:
   1     pnpm build
      This will compile the cli, server, runtime, plugin, and packages/core.

  ---

  Step 2: Start the Global Relay Server

   1. Navigate to the `server` directory:
   1     cd server
   2. Start the Relay Server:
   1     pnpm dev
      You should see output like: ✅ Global Relay Server started on ws://localhost:8080. Keep this terminal open.

  ---

  Step 3: Create a New Agent Vault

   1. Open a new terminal and navigate back to the project root:
   1     cd ..
   2. Create a new agent vault:
   1     ./cli/dist/index.js create my-test-vault
      You should see output confirming the vault creation. This creates vaults/agents/my-test-vault.

  ---

  Step 4: Start the Agent Runtime for Your Vault

   1. Start the runtime locally (recommended for initial testing):

   1     ./cli/dist/index.js start my-test-vault
      You should see output confirming the runtime started, including its PID and log file location (vaults/agents/my-test-vault/.agent.log). Keep this 
  terminal open.

       * Optional: Start runtime with Docker: If you have Docker running, you can test the containerized runtime. First, build the image:
   1         ./cli/dist/index.js build my-test-vault
          Then, start it:

   1         ./cli/dist/index.js start my-test-vault --docker
          Use docker ps to verify the container is running.

  ---

  Step 5: Open the Vault in Obsidian & Enable Plugin

   1. Open Obsidian:
       * Use "Open another vault" -> "Open folder as vault".
       * Select "Open folder as vault" and choose the vaults/agents/my-test-vault directory.
   2. Enable the Plugin:
       * Go to Settings -> Community plugins.
       * Ensure "Restricted mode" is off.
       * The opencode-agent-plugin should be listed. Enable it.
       * You should see a Notice in Obsidian: "Connected to local Agent Runtime!". Check the runtime terminal for a "Plugin connected to Agent Runtime." 
         message.

  ---

  Step 6: Test Core Agentic Workflows

   1. Create a TetraNode:
       * Inside Obsidian, create a new folder named notes (if it doesn't exist).
       * Create a new note inside notes (e.g., my-first-node.md).
       * Add the following content to the note:

    1         ---
    2         title: My First TetraNode
    3         ---
    4         # V1
    5         console.log("Hello from V1!");
    6 
    7         # V2
    8         type Input = { name: string };
    9         type Output = { message: string };
   10 
   11         # V3
   12         interface MyFunction {
   13           (input: Input): Output;
   14         }
   15 
   16         # V4
   17         { "status": "initial" }
       * Save the note.
       * Verify: Check the runtime terminal. You should see messages like "Processing file: notes/my-first-node.md" and "✅ Wrote node data to 
         .../nodes/0x...json". A new .json file should appear in vaults/agents/my-test-vault/nodes/.

   2. Visualize Nodes:
       * In Obsidian, open the Command Palette (Ctrl/Cmd+P).
       * Run the command: Opencode Agent: Visualize graph.
       * A new pane should open, displaying "Shared Brain Graph Visualization" and a list of your processed nodes.

   3. Wikify Document (Agent Assist):
       * Open my-first-node.md.
       * Open the Command Palette.
       * Run the command: Opencode Agent: Wikify document (Agent Assist).
       * You should see a Notice confirming wikification. The note content might be updated with [[wikilinks]] if matching terms are found.
       * Verify: Check vaults/agents/my-test-vault/vault-context/@TETRAHEDRAL_BRAIN_REFERENCE.md. It should contain a new entry for the wikification report.

   4. Push Context to Agent Vault:
       * Create a new note (e.g., my-goal.md) with some text like "Develop a new feature for the agent runtime."
       * Open the Command Palette.
       * Run the command: Opencode Agent: Push context to agent vault.
       * Enter my-test-vault when prompted.
       * Verify: Check vaults/agents/my-test-vault/vault-context/context.json. It should contain the content of my-goal.md as currentGoal.

   5. Commit Agent Vault State (with IPFS Pinning):
       * Open the Command Palette.
       * Run the command: Opencode Agent: Commit agent vault state.
       * Enter my-test-vault for the vault name and my-agent-id for the agent ID.
       * Verify:
           * Check the runtime terminal. You should see messages about state commitment and IPFS pinning.
           * Check vaults/agents/my-test-vault/.immutable-history/manifest.json. It should contain a new entry with a CID.
           * If IPFS daemon is running: You should see the CID being pinned in your IPFS daemon logs.

   6. Verify Node History:
       * Open my-first-node.md.
       * Open the Command Palette.
       * Run the command: Opencode Agent: Verify node history.
       * You should see a Notice indicating ✅ Proof VALID or ❌ Proof INVALID.

  ---

  This comprehensive test plan covers all the major functionalities implemented so far. Let me know if you encounter any issues during testing.
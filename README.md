# Opencode Obsidian Agent Environment

This project integrates the OpenCode.ai SDK with an Obsidian plugin to enable collaborative agent pipelines.

## Features

- **Opencode Server**: A WebSocket server that manages peer connections, messaging, and a shared graph state using a Patricia Trie.
- **Opencode Client**: A type-safe TypeScript wrapper for interacting with the server.
- **Obsidian Plugin**: Integrates with your Obsidian vault, mapping notes and canvases to a collaborative graph.

## Setup and Installation

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Build the Project**:

    ```bash
    npm run build
    ```

3.  **Link the Plugin in Obsidian**:

    - Open Obsidian's settings.
    - Go to `Community plugins`.
    - Make sure `Restricted mode` is off.
    - Click on `Browse` and search for `Opencode Agent`.
    - If it's not listed, you will need to manually install it:
        - Copy the `.obsidian/plugins/opencode-agent-plugin` directory into your vault's `.obsidian/plugins/` directory.
        - Reload Obsidian.
    - Enable the `Opencode Agent` plugin.

4.  **Configure the Plugin**:

    - Go to the `Opencode Agent` settings in Obsidian.
    - Set your `Wallet Address`, `Peer ID`, and the `Server URL` (default is `ws://localhost:8080`).

## How to Run

### Development Mode

This command will start the server and the Obsidian plugin in watch mode.

```bash
npm run dev
```

### Production

First, build the project:

```bash
npm run build
```

Then, start the server:

```bash
node dist/server/index.js
```

The Obsidian plugin will be built into its directory and should be enabled in Obsidian.

## Usage

Once the plugin is configured and connected, you can use the following commands from the Obsidian command palette:

-   **Connect to Shared Brain**: Manually connect to the Opencode server.
-   **Publish Node Update**: Publish the content of the currently active note to the shared graph.
-   **Visualize Graph in Canvas**: Create a new canvas in Obsidian with a visualization of the shared graph state.

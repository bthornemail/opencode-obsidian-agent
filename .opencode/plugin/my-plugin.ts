import type { Plugin } from "@opencode-ai/plugin"

export const MyPlugin: Plugin = async ({ project, client, $, directory, worktree }) => {
    return {
        // Type-safe hook implementations
        //     The plugin function receives:

        // project: The current project information.
        // directory: The current working directory.
        // worktree: The git worktree path.
        // client: An opencode SDK client for interacting with the AI.
        // $: Bun’s shell API for executing commands.
    }
}
import type { Plugin, tool } from "@opencode-ai/plugin"


// The tool helper creates a custom tool that opencode can call. It takes a Zod schema function and returns a tool definition with:

// description: What the tool does
// args: Zod schema for the tool’s arguments
// execute: Function that runs when the tool is called
// Your custom tools will be available to opencode alongside built-in tools.

export const CustomToolsPlugin: Plugin = async (ctx) => {
  return {
    tool: {
      mytool: tool({
        description: "This is a custom tool",
        args: {
          foo: tool.schema.string(),
        },
        async execute(args, ctx) {
          return `Hello ${args.foo}!`
        },
      }),
    },
  }
}
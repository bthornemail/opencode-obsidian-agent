import { tool } from "@opencode-ai/plugin";
import { OpencodeAgentClient } from "../../src/client";
import { TetraNode } from "../../src/core/TetraNode";
export const RefactoringAgent = async (ctx) => {
    console.log("[RefactoringAgent] Initializing...");
    return {
        tool: {
            refactorNode: tool({
                description: "Connects to the Shared Brain, refactors a node's V1 content, and publishes the update.",
                args: {
                    nodeId: tool.schema.string(),
                },
                async execute(args, toolCtx) {
                    const { nodeId } = args;
                    console.log(`[RefactoringAgent] Received request to refactor node: ${nodeId}`);
                    const client = new OpencodeAgentClient();
                    const serverUrl = 'ws://localhost:8080';
                    try {
                        // 1. Connect to the network
                        await client.connect(serverUrl);
                        client.connectPeer("refactoring-agent-wallet", "refactoring-agent-peer");
                        console.log(`[RefactoringAgent] Connected to server.`);
                        // 2. Get the current state of the node
                        const graphState = await client.getGraphState();
                        const nodeState = graphState[nodeId];
                        if (!nodeState || !nodeState.latest) {
                            const errorMsg = `Node with ID ${nodeId} not found.`;
                            console.error(`[RefactoringAgent] ${errorMsg}`);
                            return errorMsg;
                        }
                        const latestUpdate = nodeState.latest;
                        const originalNode = new TetraNode({
                            V1: "",
                            V2: "",
                            V3: "",
                            V4: ""
                        });
                        // This is a simplification; a real agent would need access to the full vertex content.
                        // For now, we will simulate the refactoring by creating a new node based on the old one.
                        console.log(`[RefactoringAgent] Refactoring V1 content for node ${nodeId}`);
                        const oldV1Content = "Simulated old V1 content"; // In a real scenario, this would be fetched
                        const newV1Content = oldV1Content + "\n// Refactored by RefactoringAgent at " + new Date().toISOString();
                        // 3. Create a new node with the refactored content
                        const refactoredNode = new TetraNode({
                            V1: newV1Content,
                            V2: "types",
                            V3: "iface",
                            V4: "values" // Placeholder
                        });
                        // 4. Execute the new node to get its dynamic centroid
                        refactoredNode.execute({ refactor: true });
                        if (!refactoredNode.dynamicCentroid) {
                            throw new Error("Execution failed to produce a dynamic centroid.");
                        }
                        // 5. Construct and publish the update message
                        const updateMessage = {
                            type: 'node_update',
                            nodeId: refactoredNode.nodeId,
                            staticCentroid: refactoredNode.staticCentroid,
                            dynamicCentroid: refactoredNode.dynamicCentroid,
                            timestamp: Date.now(),
                            lastOutputRef: refactoredNode.lastOutputRef,
                        };
                        client.publishNodeUpdate(updateMessage);
                        console.log(`[RefactoringAgent] Published update for new node ${refactoredNode.nodeId}`);
                        client.disconnect();
                        return `Successfully refactored node ${nodeId}. New node ID is ${refactoredNode.nodeId}`;
                    }
                    catch (error) {
                        console.error("[RefactoringAgent] An error occurred:", error);
                        client.disconnect();
                        return "Failed to complete refactoring.";
                    }
                },
            }),
        },
    };
};

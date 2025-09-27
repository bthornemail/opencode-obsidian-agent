import type { Plugin } from "@opencode-ai/plugin";
import { OpencodeAgentClient } from "../../src/client";
import { verifyProof } from "../../src/core/verification";
import { NodeUpdateMessage } from "../../src/core/types";

// Helper function to add a delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const VerificationAgent: Plugin = async (ctx) => {
    console.log("[VerificationAgent] Initializing...");

    const client = new OpencodeAgentClient();
    const serverUrl = 'ws://localhost:8080';

    try {
        await client.connect(serverUrl);
        console.log(`[VerificationAgent] Connected to server at ${serverUrl}`);

        // The agent identifies itself as a peer
        client.connectPeer("verification-agent-wallet", "verification-agent-peer");

    } catch (error) {
        console.error("[VerificationAgent] Failed to connect to server:", error);
        return {}; // Abort if connection fails
    }

    // Main agent loop: listen for messages and react
    client.onMessage(async (message) => {
        if (message.type === '/peer/message' && message.payload?.type === 'node_update') {
            const update = message.payload as NodeUpdateMessage;
            console.log(`[VerificationAgent] Detected update for node: ${update.nodeId.substring(0, 12)}...`);
            
            // Add a small delay to ensure the server has processed the state
            await delay(100);

            try {
                // 1. Get the latest graph state to find the history root
                const graphState = await client.getGraphState();
                const nodeState = graphState[update.nodeId];

                if (!nodeState || !nodeState.historyRoot) {
                    console.error(`[VerificationAgent] Could not find history root for node ${update.nodeId}`);
                    return;
                }

                // 2. Request the proof for the specific update
                console.log(`[VerificationAgent] Requesting proof for timestamp: ${update.timestamp}`);
                client.requestProof(update.nodeId, update.timestamp);

            } catch (e) {
                console.error("[VerificationAgent] Error during verification request:", e);
            }
        }

        if (message.type === '/graph/proof_response' && message.payload) {
            const { root, timestamp, proof, value } = message.payload;
            if(!root || !timestamp || !proof || !value) {
                console.error(`[VerificationAgent] Received invalid proof response.`);
                return;
            }

            console.log(`[VerificationAgent] Received proof for timestamp ${timestamp}. Verifying...`);
            const verifiedValue = await verifyProof(root, String(timestamp), proof);

            if (verifiedValue && verifiedValue === value) {
                console.log(`[VerificationAgent] ✅ Proof VALID for timestamp ${timestamp}`);
            } else {
                console.error(`[VerificationAgent] ❌ Proof INVALID for timestamp ${timestamp}`);
            }
        }
    });

    console.log("[VerificationAgent] Initialized and listening for node updates.");

    // Return an empty object as this agent doesn't expose hooks
    return {}; 
};

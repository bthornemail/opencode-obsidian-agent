export type Hash = string;
export type CID = string;

/**
 * Defines the structure for a message broadcast to the network when a node's state changes.
 */
export interface NodeUpdateMessage {
    type: 'node_update';
    nodeId: string; // The node's unique, deterministic address
    staticCentroid: Hash;
    dynamicCentroid: Hash;
    timestamp: number; // Unix timestamp (ms)
    lastOutputRef?: Hash | CID;
    // In a future phase, this would include proofs and signatures.
    // proof21?: number[];
    // signature?: string;
}

import { ethers } from 'ethers';

// --- Interfaces (from TETRAHEDRAL_BRAIN_REFERENCE.md) ---

type Hash = string; // e.g., hex sha256
type CID = string;  // optional IPFS CID

export interface Vertex {
  id: "V1" | "V2" | "V3" | "V4";
  kind: "fn" | "types" | "iface" | "values";
  content: string; // The actual content to be hashed
  contentRef?: Hash | CID; // Optional reference
  selfHash: Hash;
}

export interface TetraNodeData {
  nodeId: string;
  vertices: Vertex[];
  adjacencyMatrix: Hash[][];
  staticCentroid: Hash;
  dynamicCentroid?: Hash;
  lastOutput?: any;
  lastOutputRef?: Hash | CID;
}

// --- Core TetraNode Class ---

/**
 * Represents a Tetrahedral Node, a self-verifying computational unit.
 * Implements the core logic for hashing, matrix generation, and centroid computation.
 */
export class TetraNode implements TetraNodeData {
    public nodeId: string;
    public vertices: Vertex[];
    public adjacencyMatrix: Hash[][];
    public staticCentroid: Hash;
    public dynamicCentroid?: Hash;
    public lastOutput?: any;
    public lastOutputRef?: Hash | CID;

    /**
     * Creates a new TetraNode.
     * @param vertexContents An object containing the string content for the four vertices.
     */
    constructor(vertexContents: { V1: string; V2: string; V3: string; V4: string; }) {
        this.vertices = this.createVertices(vertexContents);
        this.adjacencyMatrix = this.buildAdjacencyMatrix(this.vertices);
        this.staticCentroid = this.computeCentroid(this.adjacencyMatrix);
        this.nodeId = this.deriveWallet().address;
    }

    /**
     * Executes the node's function (represented by V1) and computes the dynamic centroid.
     * @param params The parameters for the function execution.
     * @returns The output of the function.
     */
    public execute(params: any): any {
        // In a real scenario, V1's content would be dynamically executed.
        // For this implementation, we'll simulate execution and output generation.
        console.log("Executing node function with params:", params);
        const output = { result: `executed with ${JSON.stringify(params)}`, timestamp: Date.now() };
        
        this.lastOutput = output;
        this.lastOutputRef = this.hash(JSON.stringify(output));
        this.dynamicCentroid = this.hash(this.staticCentroid + this.lastOutputRef);

        console.log(`Dynamic Centroid updated: ${this.dynamicCentroid}`);
        return output;
    }

    /**
     * Derives an ethers.js Wallet from the node's static centroid.
     * @returns A Wallet instance.
     */
    public deriveWallet(): ethers.Wallet {
        const seed = ethers.utils.toUtf8Bytes(this.staticCentroid);
        const hashedSeed = ethers.utils.keccak256(seed);
        const hdNode = ethers.utils.HDNode.fromSeed(hashedSeed);
        const childNode = hdNode.derivePath("m/44'/60'/0'/0/0");
        return new ethers.Wallet(childNode.privateKey);
    }

    private createVertices(contents: { V1: string; V2: string; V3: string; V4: string; }): Vertex[] {
        return [
            { id: 'V1', kind: 'fn', content: contents.V1, selfHash: this.hash(contents.V1) },
            { id: 'V2', kind: 'types', content: contents.V2, selfHash: this.hash(contents.V2) },
            { id: 'V3', kind: 'iface', content: contents.V3, selfHash: this.hash(contents.V3) },
            { id: 'V4', kind: 'values', content: contents.V4, selfHash: this.hash(contents.V4) },
        ];
    }

    private buildAdjacencyMatrix(vertices: Vertex[]): Hash[][] {
        const selfHashes = vertices.map(v => v.selfHash);
        const matrix: Hash[][] = Array.from({ length: 4 }, () => Array(4).fill(''));

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i === j) {
                    matrix[i][j] = selfHashes[i];
                } else {
                    // Ensure consistent order for hashing
                    const hash1 = selfHashes[i];
                    const hash2 = selfHashes[j];
                    matrix[i][j] = this.hash(hash1 < hash2 ? hash1 + hash2 : hash2 + hash1);
                }
            }
        }
        return matrix;
    }

    private computeCentroid(matrix: Hash[][]): Hash {
        return this.hash(matrix.flat().join(''));
    }

    private hash(data: string): Hash {
        return ethers.utils.sha256(ethers.utils.toUtf8Bytes(data));
    }
}

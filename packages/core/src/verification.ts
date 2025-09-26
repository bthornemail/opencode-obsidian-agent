import { Trie } from 'merkle-patricia-tree';

/**
 * Verifies a Merkle proof against a given root hash.
 * @param root The known root hash of the trie (as a hex string).
 * @param key The key of the data to verify (e.g., a timestamp string).
 * @param proof An array of proof nodes (as hex strings).
 * @returns The value from the trie if the proof is valid, otherwise null.
 */
export async function verifyProof(root: string, key: string, proof: string[]): Promise<string | null> {
    try {
        const rootBuffer = Buffer.from(root, 'hex');
        const keyBuffer = Buffer.from(key);
        const proofBuffers = proof.map(p => Buffer.from(p, 'hex'));

        const value = await Trie.verifyProof(rootBuffer, keyBuffer, proofBuffers);
        return value.toString();
    } catch (error) {
        console.error("Proof verification failed:", error);
        return null;
    }
}

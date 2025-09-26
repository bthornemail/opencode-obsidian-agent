# 1 — High-level design (one-sentence)

Each **node** is a pure-function tetrahedron (4 vertex hashes → 4×4 adjacency matrix → static centroid). Nodes execute to produce a **dynamic centroid**. Each **face** is a Patricia-trie-backed historical log (a “light cone”). Subgraphs group nodes and have an HD wallet seed and protocol schema; peers connect via lightweight QUIC/pub-sub channels (graph edges/URIs). Obsidian vault content (files/blocks/links) is the local store and UI; JSON Canvas is the visual + exchange spec.

---

# 2 — How the pieces map (short mapping)

* Node = tetrahedron (V1..V4).

  * V1: function code (or reference)
  * V2: param types/interface signature
  * V3: parameter values / input references
  * V4: prior output or state snapshot
* Vertex = hash(payload) (SHA-256) or CID.
* Edge = hash(Vi.hash + Vj.hash).
* Adjacency matrix (4×4) = matrix of self-hashes and edge hashes.
* Static centroid = hash(flatten(matrix)).
* Dynamic centroid = hash(staticCentroid + hash(output)).
* Face = triangle (three vertex references) → persisted as **Patricia trie** (history).
* Subgraph = shared group of nodes + HD wallet seed + protocol schema (pub/priv).
* Addressing = ethers.js HDNode from centroid/vertex seed → secp256k1 keys for signing.
* Peer identity = libp2p PeerId or passkey derived from subgraph seed.
* Edges in graph = active socket endpoints (QUIC/WebRTC) published as URIs: `geo://net/subgraph/node#edge` or `geo://node/<addr>/edge/<edgeHash>`.
* Obsidian mapping: files/blocks/links → faces/vertices/tries; JSON Canvas = visual inverse-dual.

---

# 3 — Why this is feasible / benefits

* Deterministic, auditable identity (centroid + HD path) for each node.
* Lightweight networking: send only changed rows/columns + dynamic centroid + signature.
* Offline-first: faces as tries let offline peers append events locally and later sync with Merkle proofs.
* Obsidian is ideal as local UI & storage (vault as canonical local DB), Canvas as visualizer, and plugin hooks for executing nodes or pushing updates to peers.
* You get both semantic view (embeddings / function outputs) and cryptographic verification (hashes + signatures + tries).

---

# 4 — Obsidian integration: mapping & plugin responsibilities

### Map Obsidian types → geometric elements

* **File** = Node container or Subgraph manifest (metadata + adjacency matrix snapshot + provenance).
* **Block (block id / paragraph / heading)** = Vertex payloads (code block = V1, YAML frontmatter/attrs = V2, fenced JSON = V3 param values, last output stored in block = V4).
* **Link (internal)** = edges between nodes; also used to reference face tries in other notes.
* **Tag/group** = Subgraph membership (e.g., `#subgraph/my-net`).
* **Canvas (JSON Canvas)** = visual inverse dual: nodes as tetrahedral glyphs, faces/trie roots, and socket endpoints shown as URIs.

### Plugin responsibilities

* Provide CLI + command palette to create node templates (4 quadrant blocks), compute and show adjacency matrix & centroid.
* Compute vertex hashes automatically on save and generate adjacency matrix (store in YAML or hidden metadata).
* Expose node execution API (run function block safely in sandbox or via configurable runtime) and compute dynamic centroid.
* Persist faces as Patricia tries in plugin storage (or as files in `.obsidian/…`) and optionally export roots as CIDs.
* Provide pub/sub network plugin module: QUIC or WebRTC connector to peers; exchange updates, signatures, proofs.
* Provide utilities: derive ethers HD addresses, sign outputs, verify signature, request Merkle inclusion proofs.
* Provide UI: canvas visualization, proof checker, and peer/update logs.

---

# 5 — Data model (TypeScript interfaces — concrete)

```ts
// basic types
type Hash = string;   // hex sha256
type CID = string;    // optional ipfs CID

// Vertex describes quadrant content; contentRef is hash or CID.
// The plugin can inline small payloads or reference file/block CIDs.
interface Vertex {
  id: "V1" | "V2" | "V3" | "V4";
  kind: string;        // e.g., "fn", "types", "params", "state"
  contentRef: Hash | CID;
  selfHash: Hash;
}

// Tetrahedral node structure
interface TetraNode<TInput = any, TOutput = any> {
  nodeId: string;             // derivable (e.g., staticCentroid or hdAddress)
  vertices: Vertex[];         // length = 4
  adjacencyMatrix: Hash[][];  // 4x4 matrix of strings (selfHash on diagonal)
  staticCentroid: Hash;       // hash(flatten(matrix))
  dynamicCentroid?: Hash;     // updated after execution
  lastOutputRef?: Hash | CID;
  proof21?: number[];         // 21 axioms -> 0/1 or score
  signedBy?: string;          // wallet address that signed latest update
  faces?: Record<string, CID>; // face id (e.g., "F12") -> trie root CID
}

// Subgraph / workspace group
interface Subgraph {
  id: string;
  seedRef: Hash | CID; // secret seed stored local or encrypted for permissioned subgraphs
  schemaRef?: CID;     // optional schema describing Hilbert thresholding, validation rules
  accessPolicy: "public" | "permissioned";
  peerList?: string[]; // known peer addresses or peerIds
}
```

---

# 6 — Addressing & keys (practical)

* Use the **staticCentroid** as seed material:

  * `seed = keccak256(staticCentroid)` or `seed = keccak256(concat(vertexHashes))`
  * `hd = ethers.utils.HDNode.fromSeed(seed)` or from mnemonic derived by KDF
  * derive path: `m/44'/60'/subgraphIndex'/nodeIndex'` or a canonical path derived from hash bits
  * `wallet = new ethers.Wallet(hd.privateKey)` → `wallet.address` used as node identity
* Sign updates: `wallet.signMessage(dynamicCentroid || JSON.stringify(update))`
* Verification: any peer can `ethers.utils.verifyMessage` to check signature → canonical identity.

---

# 7 — Networking: pub/sub + URIs + offline sync

### Protocol & URIs

* Define canonical URIs so any peer can reference a node or face:

  * Node: `geo://<network>/<subgraphId>/node/<walletAddress>`
  * Face trie: `geo://<network>/<subgraphId>/node/<addr>/face/<faceId>`
  * Snapshot CID: `geo+ipfs://<CID>`

### Transport

* Use **QUIC** (recommended for low-latency), or **WebRTC** for browser clients. For a simpler start, use WebSockets.
* Implement pub/sub topics:

  * `topic:subgraph:<id>` — global subgraph channel
  * `topic:node:<addr>` — node-specific channel
* Message format: only send deltas (changed matrix rows/cols) + dynamic centroid + short proof + signature + optional CID snapshots.

### Offline/Sync

* Local appends go to face Patricia tries (local files). Each face trie root changes → update root hash. On reconnect, peers exchange root hashes and request Merkle inclusion proofs / deltas to reconcile.
* To reduce bandwidth, share only Merkle proofs + minimal payloads; archive older snapshots to IPFS and share CIDs.

---

# 8 — Using Obsidian Vault & JSON Canvas

### Store tries & snapshots

* Faces' Patricia tries can be saved in `.obsidian/plugin-data/<plugin>/faces/<nodeId>/<faceId>.trie` or as a file tree in the vault for portability.
* When user pins a snapshot, plugin computes a CID (via IPFS lib) and stores it in frontmatter or a manifest note.

### JSON Canvas Spec

* Canvas nodes: render tetrahedral glyph with metadata:

  * show static centroid, dynamic centroid, lastOutputRef, face roots
  * clicking a face opens the face-trie note/history
* The **inverse-dual** representation on canvas: show node's dual vertices (edge-hashes) as separate nodes and draw cross-links so the visualization matches your duality idea.

### Example note structure (YAML frontmatter)

```md
---
nodeId: "0xabc..."
staticCentroid: "0x..."
adjacencyMatrix:
  - ["0xaaa","0xbbb","0xccc","0xddd"]
  - ...
faces:
  F12: "cid:Qm..."
  F13: "cid:Qm..."
...
---
# Node: Add function
```

* The plugin updates these fields automatically on save.

---

# 9 — Verification / Hilbert checks

* Compute `proof21` where each entry is either boolean or score (0..1).
* Some axioms are local (checkable by node owner), others need neighbor data (request via peer or check against face tries).
* Acceptance policy (example):

  * require `minLocalPass = 12` local axiom checks
  * require `minPeerConsensus = 3` peers to verify remote axioms
  * optionally require signatures from owner + two validators

---

# 10 — Security & privacy notes

* Store subgraph seeds locally and encrypted for permissioned networks.
* Use TLS/QUIC and message-level signatures.
* Private subgraphs: encrypt face tries and snapshot CIDs with group keys derived from subgraph seed.
* For public subgraphs, signatures still required to authenticate the proposer.

---

# 11 — Practical implementation plan (phased)

**Phase 0 — PoC (single machine)**

* Implement `TetraNode` class (hashing, matrix, centroid, dynamic centroid).
* Minimal CLI to create nodes from a template (function block, types block, params block, state block).
* Simple verification routine for a subset of Hilbert axioms (collinearity, distances).

**Phase 1 — Obsidian plugin + local storage**

* Plugin that watches node notes, computes hashes, writes adjacency matrix & centroid to frontmatter.
* JSON Canvas renderer using adjacency data.
* Local face tries stored in plugin folder.

**Phase 2 — Networking & HD addressing**

* Add ethers HD derivation and signing support.
* Implement QUIC or WebRTC-based pub/sub and a small peer discovery (static peers first).
* Broadcast compact `UpdateMessage` on node update and implement verifyUpdate on receiver.

**Phase 3 — Offline sync & Merkle/Patricia proofs**

* Implement Patricial trie store + inclusion proofs between peers.
* Snapshot pinning to IPFS (optional).
* Add conflict resolution and simple consensus policy.

**Phase 4 — Production & UX polishing**

* ACLs, permissioning for subgraphs, discovery/registry, dashboard, agent automation (autonomous node execution), embedding integration, Hilbert full-21 verifier.

---

# 12 — Example code snippets (starter)

### Build adjacency matrix & centroid

```ts
import { keccak256 } from "ethers/lib/utils";
import crypto from "crypto";

function hashStr(s: string) { return crypto.createHash("sha256").update(s).digest("hex"); }

function buildMatrix(vertexData: string[]) {
  if (vertexData.length !== 4) throw new Error("Need 4 vertices");
  const self = vertexData.map(hashStr);
  const matrix: string[][] = Array.from({length:4}, ()=>Array(4).fill(""));
  for (let i=0;i<4;i++){
    for (let j=0;j<4;j++){
      if (i===j) matrix[i][j]=self[i];
      else matrix[i][j]=hashStr(self[i]+self[j]);
    }
  }
  return matrix;
}

function centroid(matrix: string[][]) {
  return hashStr(matrix.flat().join(""));
}
```

### Derive HD address (ethers)

```ts
import { ethers } from "ethers";

function deriveNodeWalletFromCentroid(centroidHex: string) {
  // use centroid as seed via keccak -> 32 bytes
  const seed = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(centroidHex));
  const hd = ethers.utils.HDNode.fromSeed(seed); // note: fromSeed expects bytes
  const child = hd.derivePath("m/44'/60'/0'/0/0"); // pick deterministic path scheme
  return new ethers.Wallet(child.privateKey);
}
```

---

# 13 — How Obsidian Canvas fits as "view into the brain"

* Each face (Patricia trie) is a partial transcript of historical updates — like a local "experiential light cone."
* Nodes are executable functions (agents): run them locally from the plugin or a sandboxed runtime.
* Canvas = inverse-dual view so you can see both behavior (dynamic centroids) and verification state (dual hashes / signatures).
* Collaboration: share subgraph manifest + subgraph seed (permissioned) or public-only manifests (public).

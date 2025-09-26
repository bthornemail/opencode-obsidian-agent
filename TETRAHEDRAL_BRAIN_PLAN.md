# The Tetrahedral Shared Brain: A Comprehensive Plan

*Version 1.0*
Nice — this is a great, ambitious plan. Below I’ll give you a **complete plan specification** for a `vaults/` system that supports multi-tenant agent/user vaults, CLI tooling, Obsidian plugin integration, Docker/npm manager builds, background agent runtimes, and integrations with the packages and SDKs you listed. The spec covers architecture, file layout, TypeScript interfaces, CLI commands, `npmrc`/package manager options, Docker compose, security & key management, Obsidian UI features, agent lifecycle, MCP + opencode SDK wiring, and a step-by-step dev plan.

I’ll keep it actionable — you can hand this spec to a generator (or me) and get an implementation started immediately.

---

# Vaults Plan Specification — “Opencode Obsidian Agentic Vaults”

> Goal: Provide a production-grade environment for **decentralized collaborative coding and AI agents** using Opencode + Obsidian. Each vault is a self-contained agent/user workspace with cryptographic identity, persistent history (Patricia tries/CIDs), background agent processes, and optional Docker/npm packaging for reproducible builds.

---

## 1 — Architectural overview

Components:

* `vaults/` root folder — top-level container for many vaults.

  * Each vault = an Obsidian vault + agent runtime + local node metadata.
* CLI: `opencode-vault` — create/manage vaults, build images, run agents, connect to Opencode server.
* Agent runtime: background Node.js process (or Docker container) that:

  * runs Opencode client + MCP agent logic
  * indexes Obsidian vault contents (MD, Canvas)
  * computes vertex/adjacency matrices, centroids, and face tries
  * exposes a local RPC or WebSocket for plugin and admin UI
* Obsidian plugin: `.obsidian/plugins/opencode-agent-plugin/` inside each vault — UI + sync with background runtime
* Package manager hooks:

  * per-vault `package.json`, `npmrc`, and optional Dockerfile
  * centralized build pipeline to create production images of vault + agent
* Persistence:

  * local: LevelDB/LMDB/SQLite for tries & metadata
  * optional: IPFS for pinned snapshots (CIDs)
* Security:

  * per-vault HD seed / wallet (stored encrypted)
  * peer passkeys for private subgraphs
  * signed updates (ethers.js)
* Integrations:

  * `opencode` SDK (server & client)
  * `@modelcontextprotocol/typescript-sdk` (MCP)
  * NLP libs: `wordnet`, `wink-nlp`, `tinyneat`
  * optional Embedding providers (OpenAI or local)
* Orchestration:

  * Docker Compose / Kubernetes manifests for production
  * `npm`/`pnpm`/`yarn` support (via `.npmrc` and per-vault lockfiles)

---

## 2 — Top-level repo layout

```
opencode-obsidian-workspace/
├─ cli/                         # CLI tooling (opencode-vault)
│  ├─ src/
│  └─ package.json
├─ server/                      # optional shared Opencode server wrapper
│  ├─ src/
│  └─ package.json
├─ runtime/               # background Node runtime (per-vault)
│  ├─ src/
│  └─ package.json
├─ templates/
│  ├─ vault-template/           # Obsidian + plugin skeleton
│  └─ docker-vault/             # Dockerfile template
├─ vaults/
│  ├─ user-joe/                 # example vault
│  │  ├─ .obsidian/
│  │  │  └─ plugins/opencode-agent-plugin/ (plugin code or symlink)
│  │  ├─ package.json
│  │  ├─ npmrc
│  │  └─ data/                  # local DB, tries, CIDs
│  └─ ...
├─ docs/
└─ docker-compose.yml
```

---

## 3 — Vault structure (detailed)

Each vault directory holds everything needed to run a vault either locally or in Docker.

```
vaults/<vault-name>/ 
├─ .obsidian/
│  └─ plugins/opencode-agent-plugin/   # plugin code or config
├─ agent-config.json                   # vault-level config (seedRef/addresses)
├─ package.json                        # vault-specific deps
├─ .npmrc                              # optional registry or auth
├─ workspace.json                      # optional Vault workspace settings
├─ nodes/                              # generated node representations (adj matrices)
│  └─ <nodeId>.json
├─ faces/                              # Patricia tries or time-indexed logs
│  └─ <faceId>.trie
├─ data/                               # LMDB/SQLite for fast lookups
└─ notes/                              # markdown vault contents
   └─ *.md
```
`agent-config.json` (example):

```json
{
  "vaultName": "user-joe",
  "hdSeedRef": "enc:..", // encrypted seed or pointer to key management
  "subgraphs": [
    {
      "id": "public/main",
      "access": "public",
      "schemaCID": "cid:..."
    }
  ],
  "opencodeServer": "https://opencode.example.net",
  "mcpServer": "https://mcp.example.net",
  "walletDerivationPath": "m/44'/60'/0'/0/0",
  "pluginEndpoint": "http://localhost:4201"
}
```

---

## 4 — TypeScript interfaces (core)

```ts
// core/types.ts
export type Hash = string;
export type CID = string;

export interface VaultConfig {
  vaultName: string;
  hdSeedEnc?: string;
  opencodeUrl?: string;
  mcpUrl?: string;
  pluginPort?: number;
  subgraphs?: SubgraphConfig[];
}

export interface SubgraphConfig {
  id: string;
  access: "public" | "permissioned";
  schemaCID?: CID;
  peers?: string[];
}

export interface Vertex {
  id: "V1" | "V2" | "V3" | "V4";
  kind: string;
  contentRef: Hash|CID;
  selfHash: Hash;
}

export interface TetraNode {
  nodeId: string;
  vertices: Vertex[];
  adjacencyMatrix: string[][];
  staticCentroid: string;
  dynamicCentroid?: string;
  lastOutputRef?: Hash;
  proof21?: number[];
  faces?: Record<string,CID>;
}
```

---

## 5 — Vault creation & CLI

Implement `opencode-vault` CLI (TypeScript + ts-node for dev). Example commands:

```
opencode-vault create <vault-name> [--template vault-template]
opencode-vault init <vault-path>  # scaffolds plugin + config
opencode-vault start <vault-name> [--docker]  # starts agent runtime + plugin RPC
opencode-vault build <vault-name>  # build docker image (for deployment)
opencode-vault keygen <vault-name> # generate encrypted HD seed for vault
opencode-vault export <vault-name> --cid  # snapshot to IPFS and returns CID
```

CLI rough sketch (node):

```ts
#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
program
  .command("create <name>")
  .action(async (name) => { /* copy template, init package.json, gen key */});
program.parse(process.argv);
```

`opencode-vault create` actions:

* create folder under `vaults/`
* scaffold `.obsidian/` with plugin skeleton and Canvas example
* write `agent-config.json` with defaults
* run `npm install` optionally

---

## 6 — Agent runtime responsibilities

Background Node process (or Docker container) that runs per-vault:

* Watches vault folder for file changes (Obsidian saves) and:

  * parses frontmatter blocks
  * computes vertex self-hashes
  * builds adjacency matrix and static centroid
  * stores nodes into `nodes/` and updates face tries
* Exposes a local HTTP/WebSocket `/rpc` for plugin & CLI:

  * GET `/node/:id` → returns node JSON
  * POST `/execute/:id` → run node.fn in sandbox (or forward to opencode server)
  * POST `/publish` → publish node update to opencode server
* Integrates `opencode` SDK client:

  * Registers peer via HD key
  * Publishes updates (dynamic centroid, proof21, signatures)
* Integrates MCP SDK:

  * Publish contexts, model requests, agent orchestration
* Uses NLP libs:

  * `wordnet` for lexical expansion
  * `wink-nlp` for tokenization/NER
  * `tinyneat` for small neural models or feature transforms

Sandboxing:

* **IMPORTANT**: Node execution must be sandboxed — use worker threads with restricted environment (no file access) or remote execution via opencode server if untrusted.

---

## 7 — Obsidian plugin responsibilities

Plugin location: `.obsidian/plugins/opencode-agent-plugin/`

Files:

* `main.ts` — plugin class: connects to local agent runtime, draws canvas, registers commands
* `manifest.json` — required by Obsidian
* `settings.ts` — settings tab for server URL, wallet address, passkeys, auto-sync
* `canvas-renderer.ts` — translate nodes/adjs → JSON Canvas objects
* `sync.ts` — sync logic with local runtime (via RPC) and remote opencode server

Key plugin actions:

* On load: read `agent-config.json`, connect to `pluginEndpoint`
* On save: notify runtime of changed note; runtime recomputes node
* Panel: show graph visualizer (Canvas) with interactive node details
* Commands:

  * Connect to Shared Brain
  * Publish Node
  * View Face History
  * Run Node (execute function and display output)
* UX: ensure plugin uses background runtime for heavy lifting; plugin only orchestrates & displays.

---

## 8 — Package manager & build (npmrc, Docker)

Per-vault `.npmrc`:

* Allow private registries or mirror
* `//registry.npmjs.org/:_authToken=${NPM_TOKEN}` for CI

Monorepo package management:

* Prefer `pnpm` for efficient monorepo builds, but support `npm`/`yarn`.
* Each vault keeps its own `node_modules` for isolation; CI builds can create Docker images.

Dockerfile example (vault runtime):

```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm ci --omit=dev
COPY . .
ENV NODE_ENV=production
EXPOSE 4201
CMD ["node", "dist/runtime/index.js"]
```

`docker-compose.yml` top-level can manage multiple vaults with separate services.

---

## 9 — Integrations: opencode + MCP + NLP libs

### opencode SDK (client)

* Use SDK for:

  * agent orchestration
  * model calls if policy allows local inference
  * publishing updates to central server or peer relays
* The runtime will instantiate `opencode.Client({ apiKey })` and register agents and subgraphs.

### Model Context Protocol (MCP)

* Integrate `@modelcontextprotocol/typescript-sdk` for context exchange:

  * publish vault contexts
  * request contextual embeddings / retrieval
  * store context snapshots in faces (tries) with CID references

### NLP libs usage patterns

* `wordnet`:

  * expand keywords from note content to improve embedding and vertex selection
* `wink-nlp`:

  * parse notes into clauses/blocks; extract named entities for vertex metadata
* `tinyneat`:

  * small classifier models for local heuristics (e.g., predict which face to attach a node)

The runtime provides plugin hooks and batched background jobs for these tasks.

---

## 10 — Security & key management

* Each vault gets a **master seed**. Options to store:

  * Locally encrypted keystore (AES-GCM) with password
  * External KMS (HashiCorp Vault, AWS KMS)
* Keys used:

  * HD wallet seed → derive `ethers` wallet per node for signing
  * Peer passkeys for private subgraphs
* Secure RPC:

  * plugin ↔ runtime uses `localhost` + bearer token in `agent-config.json`
  * remote communications use TLS, and sign messages for authenticity
* Rotation:

  * Support key rotation for vaults (derive new seeds and bump manifest).

---

## 11 — Consensus & offline-first sync design

* Offline mode: plugin & runtime accept local edits and append to faces as local tries.
* Sync algorithm:

  1. On reconnect, runtime computes new face root CID and offers root to peers.
  2. Peers compare roots; missing history fetched via Merkle inclusion proofs.
  3. Resolve conflicts by deterministic rules (higher sequence number, signature weight, or quorum).
* Checkpointing:

  * Pin periodic snapshots to IPFS
  * Store CID in vault manifest for audit

---

## 12 — CI/CD and deployment

* Example pipelines:

  * `build` job: compile runtime, run tests, build docker image, push to registry
  * `release` job: optional publish plugin zip to Obsidian community marketplace
* Local dev:

  * `pnpm -w` workspace to install all packages
  * `opencode-vault start <vault>` runs runtime in dev mode and loads plugin in local Obsidian via `cmd+P -> Toggle Developer Tools -> Load unpacked plugin` pattern

---

## 13 — Example flow (user story)

1. Alice runs `opencode-vault create alice-vault`.
2. CLI scaffolds vault & plugin, generates encrypted HD seed.
3. Alice opens Obsidian, enables `opencode-agent-plugin`.
4. Plugin contacts runtime at `http://localhost:4201` and registers.
5. Alice writes a new note; plugin notifies runtime.
6. Runtime:

   * tokenizes note, creates vertices, builds adjacency matrix, computes centroid.
   * stores node JSON and appends to face trie.
7. Alice clicks "Publish Node" in plugin UI:

   * runtime signs dynamic centroid and uses opencode SDK to publish update.
8. Bob (another peer) receives update via opencode server or peer pub/sub:

   * verifies signature, requests inclusion proof from Alice's face trie, and accepts update into his local state.

---

## 14 — Example code snippets

### computeMatrix (already given earlier), but cast into module:

```ts
// runtime/src/graph.ts
import crypto from "crypto";

export function hashStr(s: string) {
  return crypto.createHash("sha256").update(s).digest("hex");
}

export function buildTetraMatrix(vertexContents: string[]) {
  if (vertexContents.length !== 4) throw new Error("4 vertices required");
  const self = vertexContents.map(hashStr);
  const matrix = Array.from({length:4}, ()=>Array(4).fill(""));
  for (let i=0;i<4;i++){
    for (let j=0;j<4;j++){
      if (i===j) matrix[i][j]=self[i];
      else matrix[i][j]=hashStr(self[i]+self[j]);
    }
  }
  const staticCentroid = hashStr(matrix.flat().join(""));
  return { matrix, staticCentroid };
}
```

### HD wallet derivation (ethers)

```ts
import { ethers } from "ethers";

export function deriveWalletFromCentroid(centroidHex: string) {
  const seed = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(centroidHex));
  const hd = ethers.utils.HDNode.fromSeed(seed); // returns HDNode
  const child = hd.derivePath("m/44'/60'/0'/0/0");
  return new ethers.Wallet(child.privateKey);
}
```

---

## 15 — Roadmap & prioritized milestones

**MVP (2–4 weeks)**: **[COMPLETED]** The foundational architecture is now implemented. This includes the `opencode-vault` CLI with `create` and `start` commands, a background `runtime` with file watching and node processing capabilities, and a refactored Obsidian `plugin` that correctly connects to its dedicated runtime.

**Phase 2 (4–8 weeks)**:

* opencode SDK integration and publish pipeline
* Patricia trie face store and Merkle proofs & simple sync
* Basic MCP integration for context exchange

**Phase 3 (8–12 weeks)**:

* Docker images, production compose, IPFS snapshot pinning
* Advanced Hilbert proof21 computation and proof verification
* NLP integrations (`wordnet`, `wink-nlp`, `tinyneat`) and agent workflows

**Phase 4+**:

* Multi-peer discovery, libp2p integration, permissioned networks, consensus strategies, UX polish and Obsidian marketplace release

---

## 16 — Open questions / design decisions you should confirm

* Storage backend: LMDB vs SQLite vs LevelDB? (LMDB for speed)
* Execution model for nodes: local sandbox vs remote execution (security tradeoff)
* Consensus rule preference: quorum-based vs deterministic tie-breakers
* Private subgraph key management: in-vault passkey or external KMS
* Whether to support full IPFS pinning by default or optional

---

## 17 — Next steps I can implement now for you

Pick one and I’ll produce code in this reply:

1. Full **`TetraNode` TypeScript class** + graph utilities + HD wallet integration + signature helpers.
2. Minimal **agent runtime** (file watcher, matrix builder, HTTP RPC) runnable locally.
3. Obsidian **plugin scaffold** (manifest + `main.ts`) that connects to runtime and displays node list.
4. CLI scaffold (`opencode-vault`) with `create` and `start` commands.
5. **Advanced Agent Behaviors**: Develop more sophisticated agents, such as an "Orchestrator Agent" that can delegate tasks to other agents, or agents that can autonomously propose and create new `TetraNodes` based on high-level goals.                                         
 6. **Geometric Consensus (Hilbert Proofs)**: Implement the generation and verification of the `proof21` array, adding the final layer of geometric consensus to the verification process.                                                                                               
7. **Full Decentralization (IPFS)**: Integrate an IPFS client to publish the CID-bundled state to the public IPFS network, making theagent's work globally verifiable and accessible.                                                                                               
 8. **Enhanced UI/UX**: Develop the React-based `GraphView` into a rich, interactive visualization of the node graph, allowing users to explore the relationships and history of nodes visually.                                                                                       
 9. **Full MCP Implementation**: Implement the remaining MCP commands, such as a true request/response flow for `GetVaultContext`, to enable more dynamic agent interactions.             
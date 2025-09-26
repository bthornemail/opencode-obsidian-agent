# The Tetrahedral Shared Brain: A Comprehensive Reference

*Version 1.0*

---

## 1. The Vision: What is the Tetrahedral Shared Brain?

Imagine a collaborative environment, like a shared digital brain, where every piece of information is not only stored but is also **self-verifying, auditable, and tamper-proof**. This is the vision of the Tetrahedral Shared Brain.

At its core, this project aims to solve a fundamental problem of the digital age: **trust**. How can we trust that information hasn't been altered? How can we track the complete history of a thought or a piece of data? How can we build collaborative AI systems that operate on a shared, verifiable source of truth?

The Shared Brain answers these questions by representing information in a novel way: as a **geometric object** (a tetrahedron) with intrinsic cryptographic properties. It's a system designed for researchers, developers, journalists, and AI agents to build a collective intelligence that is both powerful and provably honest.

**Analogy:** Think of a traditional document as a piece of paper. You can write on it, but it can be easily modified, erased, or replaced. A node in the Shared Brain is like a **magical, transparent cube**. 
- Every change you make is instantly etched into the cube's structure.
- The cube's very shape and shimmer change in a predictable way with every new piece of information.
- Anyone can look at the cube and, just by observing its geometric properties, verify its entire history and confirm that it hasn't been tampered with.

This project integrates this powerful concept directly into **Obsidian**, a popular tool for thought, and uses **Opencode** to create the agentic and communication backbone.

---

## 2. Core Concepts Explained

### 2.1. The Tetrahedral Node: A Verifiable Container

The fundamental unit of the system is the **Tetrahedral Node**. Instead of a simple file or data object, it's a formal structure with four distinct parts, or **vertices**.

-   **The Four Vertices (V1-V4)**: Each node is a pure function, and its definition is split into four quadrants:
    -   **V1: The Logic**: The actual function code or computational logic.
    -   **V2: The Signature**: The parameter types and input/output signatures (e.g., `(string) => number`).
    -   **V3: The Interface**: The contract or rules for how the function should be used, including specific parameter values.
    -   **V4: The State**: The previous output of the function, or a snapshot of its last known state.

-   **Cryptographic DNA (The Centroids)**: The node has two key identifiers:
    -   **Static Centroid**: This is the node's unique "DNA." It's a cryptographic hash of the node's fundamental structure (all four vertices and their relationships). If even a single character in the function's code changes, the Static Centroid changes completely. This proves the node's definition is unaltered.
    -   **Dynamic Centroid**: This is the node's "heartbeat" or "current status." It tracks the node's behavior by combining the Static Centroid with the hash of the most recent output. It changes every time the node runs, providing a live record of its activity.

### 2.2. Faces & Patricia Tries: The Unforgettable History

A tetrahedron has four triangular faces. In our system, each **face represents a chapter in the node's history book**.

-   **Historical Log**: Each face stores a historical log of the node's activity, such as the sequence of `dynamicCentroids` over time.
-   **Patricia Trie**: This history is stored in a special data structure called a Patricia Trie. Its key feature is that the entire history is captured in a single, unique hash at the top (the root). If any part of the history is altered, the root hash changes.
-   **Analogy**: This is like a book where every page's content is used to calculate the page number of the next page. If you try to secretly rip a page out or change a sentence, the numbering for the rest of the book would be wrong, and the tampering would be immediately obvious.

### 2.3. Geometric Consensus: Verifying Relationships

How do we ensure that a network of these nodes remains consistent? We use **Geometric Consensus**.

-   **The Idea**: Instead of just trusting a digital signature, we use the rules of geometry to verify that the relationships between data points are still valid after a change.
-   **Hilbert's Axioms**: We apply a set of 21 fundamental geometric rules (Hilbert's axioms) to the node and its data. A node must satisfy these rules to be considered valid.
-   **The Proof**: The result is a **21-entry proof array**. This array is like a certificate of geometric integrity that the node can show to its peers to prove its validity without revealing its private contents.

---

## 3. System Architecture

### 3.1. Identity: Who is Who?

-   **Node Identity**: Each node gets a unique, permanent address from its Static Centroid, using the same technology that powers cryptocurrencies (Hierarchical Deterministic Wallets). This allows a node to own its data and sign its updates.
-   **Peer Identity**: A user or an AI agent on the network is a "peer." They have their own ID, which can be a `peerId` or a shared passkey for private groups.

### 3.2. Subgraphs: Shared Workspaces

Nodes are organized into **Subgraphs**, which are like shared, secure project folders.
-   A Subgraph contains a group of related nodes and defines the "rules of the game" for that group:
    -   **Access Policy**: Is it a public project, a private one for a small team, or something in between?
    -   **Protocol Schema**: What are the specific rules for validation and consensus within this group?

### 3.3. Communication: The Network Layer

-   **Connections as Edges**: The lines connecting nodes in our graph are live, real-time communication channels.
-   **Protocol (QUIC)**: We use a modern, fast, and secure protocol called QUIC for peer-to-peer communication.
-   **Pub/Sub Model**: For efficiency, nodes subscribe to topics they care about. When a node is updated, it publishes a small, lightweight message only to the peers who are listening.

---

## 4. Integration: Obsidian & Opencode

### 4.1. Obsidian: The User's Gateway

Obsidian is where the user interacts with the Shared Brain. It's the bridge between human thought and the verifiable graph.

-   **Notes as Nodes**: A simple note in your Obsidian vault becomes a powerful Tetrahedral Node.
-   **Automatic Hashing**: When you edit a note (e.g., change a code block), the plugin automatically re-calculates the hashes and centroids in the background.
-   **Metadata as Truth**: This cryptographic truth (the centroids) is stored in the note's frontmatter metadata.
-   **Canvas as a Visualizer**: The Obsidian Canvas is used to create a live, interactive map of the Shared Brain, showing the nodes, their connections, and their current state.

**Example Workflow:**
1.  You create a new note in Obsidian and add a code block.
2.  The plugin identifies this as **Vertex 1** of a new node.
3.  It computes the `staticCentroid` and saves it to the note's frontmatter.
4.  You run a command: "Execute Node."
5.  The plugin runs the code, gets an output, and computes the `dynamicCentroid`.
6.  It then broadcasts this update to connected peers.

### 4.2. Opencode: The Agentic Backbone

Opencode provides the tools to build and manage the AI agents and server infrastructure that power the network.
-   **Agentic Interaction**: Opencode allows us to create AI agents that can read, write, and interact with the Tetrahedral Nodes, just like a human user.
-   **Server Infrastructure**: The peer-to-peer server that manages connections and messages is built using Opencode's environment.

---

## 5. Glossary of Terms

-   **Tetrahedral Node**: The core data unit; a self-verifying container for a pure function.
-   **Vertex**: One of the four components that define a node (Logic, Signature, Interface, State).
-   **Static Centroid**: The node's unique, unchanging cryptographic DNA.
-   **Dynamic Centroid**: The node's live "heartbeat," which changes with every new output.
-   **Face**: A side of the tetrahedron; used to store a historical log of the node's activity.
-   **Patricia Trie**: A special data structure used to store history in a verifiable way.
-   **Subgraph**: A shared workspace or project folder for a group of nodes.
-   **QUIC**: A modern, fast, and secure network protocol used for peer-to-peer communication.

---

## 6. Phased Implementation Plan

This project will be built in phases to ensure a stable and robust foundation.

1.  **Phase 0 (Core Logic)**: Implement the `TetraNode` class in TypeScript. Build a simple command-line tool to create a node and verify its centroids.
2.  **Phase 1 (Obsidian Integration)**: Develop the core Obsidian plugin. Have it automatically track changes in notes and update centroids in the frontmatter. Render a basic visualization on the Canvas.
3.  **Phase 2 (Networking & Identity)**: Integrate `ethers.js` for unique node addresses and digital signatures. Implement the peer-to-peer communication layer so two users can exchange node updates.
4.  **Phase 3 (History & Sync)**: **[COMPLETED]** The system's verifiable history is now functional. The server-side state management was upgraded to use `merkle-patricia-tree`, where each node is assigned a dedicated historical Patricia Trie. A timestamp-based "last-write-wins" conflict resolution policy has been implemented. An end-to-end workflow for generating Merkle inclusion proofs on the server and verifying them on the client is now in place, enabling trustless verification of a node's history.
5.  **Phase 4 (Agentic Automation)**: Onboard Opencode AI agents to the network, allowing them to autonomously create, update, and verify nodes, turning the Shared Brain into a true collaborative intelligence.

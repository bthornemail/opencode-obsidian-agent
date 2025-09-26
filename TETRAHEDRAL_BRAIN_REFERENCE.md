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

## 3. V5+ System Architecture

The definitive architecture for the project is detailed in the **`TETRAHEDRAL_BRAIN_PLAN.md`** document. This specification supersedes the architectural summaries in this reference.

At a high level, the architecture consists of three primary components:

1.  **`opencode-vault` CLI**: A command-line interface for creating, managing, and building isolated agent/user vaults.
2.  **`agent-runtime`**: A background Node.js process that runs on a per-vault basis. It is responsible for all heavy lifting: watching the vault for changes, computing node hashes, managing the local database, and exposing an RPC endpoint.
3.  **Obsidian Plugin**: A lightweight plugin that runs inside each Obsidian vault. It serves as the user interface, connecting to the local `agent-runtime` for all data and operations.

---

## 4. Implementation Plan

All development will follow the prioritized roadmap outlined in the **`TETRAHEDRAL_BRAIN_PLAN.md`** document. Please refer to that file for detailed milestones and implementation phases.

import { App, Notice, Plugin, WorkspaceLeaf, Platform } from 'obsidian';
import { OpencodeAgentClient } from '../../src/client';
import { TetraNode } from '../../src/core/TetraNode';
import { NodeUpdateMessage } from '../../src/core/types';
import { verifyProof } from '../../src/core/verification';
import { OpencodeAgentSettingTab, OpencodeAgentSettings, DEFAULT_SETTINGS } from './settings/settings';
import { GraphView, GRAPH_VIEW_TYPE } from './ui/GraphView';

export default class OpencodeAgentPlugin extends Plugin {
    settings: OpencodeAgentSettings;
    client: OpencodeAgentClient;

    async onload() {
        console.time("OpencodeAgentPlugin onload");
        await this.loadSettings();

        this.client = new OpencodeAgentClient();

        this.registerView(
            GRAPH_VIEW_TYPE,
            (leaf) => new GraphView(leaf)
        );

        this.addCommand({
            id: 'create-update-tetranode',
            name: 'Create/update TetraNode from active file',
            callback: () => this.createOrUpdateTetraNode(),
        });

        this.addCommand({
            id: 'execute-and-publish-node',
            name: 'Execute and publish node',
            callback: () => this.executeAndPublishNode(),
        });

        this.addCommand({
            id: 'verify-last-update',
            name: 'Verify last update for active node',
            callback: () => this.verifyLastUpdate(),
        });

        this.addCommand({
            id: 'connect-to-shared-brain',
            name: 'Connect to shared brain',
            callback: () => this.connectToServer(),
        });

        this.addCommand({
            id: 'visualize-graph',
            name: 'Visualize graph',
            callback: () => this.visualizeGraph(),
        });

        this.addSettingTab(new OpencodeAgentSettingTab(this.app, this));

        this.app.workspace.onLayoutReady(() => {
            if (this.settings.walletAddress && this.settings.peerId) {
                this.connectToServer();
            }
        });
        console.timeEnd("OpencodeAgentPlugin onload");
    }

    onunload() {
        this.client.disconnect();
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    async createOrUpdateTetraNode() {
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('No active file. Please open a note to create a TetraNode.');
            return;
        }

        const content = await this.app.vault.read(activeFile);
        const vertexContents = this.parseContentToVertices(content);

        if (!vertexContents) {
            new Notice('Could not find all four vertices (V1, V2, V3, V4) in the active file. Please use headings like # V1, # V2, etc.');
            return;
        }

        try {
            const node = new TetraNode(vertexContents);
            await this.app.fileManager.processFrontMatter(activeFile, (frontmatter) => {
                frontmatter['tetranode_id'] = node.nodeId;
                frontmatter['static_centroid'] = node.staticCentroid;
            });
            new Notice(`TetraNode updated for ${activeFile.basename}. Centroid: ${node.staticCentroid.substring(0, 10)}...`);
        } catch (error) {
            console.error("Error creating TetraNode:", error);
            new Notice('Failed to create TetraNode. See console for details.');
        }
    }

    async executeAndPublishNode() {
        if (Platform.isMobile) {
            new Notice('Publishing nodes is not available on mobile.');
            return;
        }

        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('No active file to execute.');
            return;
        }

        const content = await this.app.vault.read(activeFile);
        const vertexContents = this.parseContentToVertices(content);

        if (!vertexContents) {
            new Notice('Cannot execute node. File is not a valid TetraNode (missing V1-V4 headings).');
            return;
        }

        try {
            const node = new TetraNode(vertexContents);
            node.execute({ param1: 'test' }); // Simulate execution

            if (!node.dynamicCentroid) {
                throw new Error('Execution failed to produce a dynamic centroid.');
            }

            const updateMessage: NodeUpdateMessage = {
                type: 'node_update',
                nodeId: node.nodeId,
                staticCentroid: node.staticCentroid,
                dynamicCentroid: node.dynamicCentroid,
                timestamp: Date.now(),
                lastOutputRef: node.lastOutputRef,
            };

            this.client.publishNodeUpdate(updateMessage);
            new Notice(`Executed and published update for ${activeFile.basename}`);

        } catch (error) {
            console.error("Error executing and publishing node:", error);
            new Notice('Failed to publish node update. See console for details.');
        }
    }

    async verifyLastUpdate() {
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('No active file to verify.');
            return;
        }

        const fileFrontmatter = this.app.metadataCache.getFileCache(activeFile)?.frontmatter;
        const nodeId = fileFrontmatter?.['tetranode_id'];

        if (!nodeId) {
            new Notice('Active file is not a valid TetraNode (missing tetranode_id).');
            return;
        }

        try {
            new Notice(`Requesting state for ${nodeId.substring(0,12)}...`);
            const graphState = await this.client.getGraphState();
            const nodeState = graphState[nodeId];

            if (!nodeState || !nodeState.latest) {
                new Notice('Node state not found on server.');
                return;
            }

            const latestUpdate = nodeState.latest as NodeUpdateMessage;
            this.client.requestProof(nodeId, latestUpdate.timestamp);

            new Notice(`Verifying last update (Timestamp: ${latestUpdate.timestamp})...`);

        } catch (e) {
            console.error(e);
            new Notice('Error during verification. See console.');
        }
    }

    private parseContentToVertices(content: string): { V1: string; V2: string; V3: string; V4: string; } | null {
        const vertices: { [key: string]: string } = {};
        const headings = ['V1', 'V2', 'V3', 'V4'];

        for (let i = 0; i < headings.length; i++) {
            const currentHeading = `# ${headings[i]}`;
            const nextHeading = (i + 1 < headings.length) ? `# ${headings[i+1]}` : null;

            const startIndex = content.indexOf(currentHeading);
            if (startIndex === -1) return null;

            const contentStartIndex = startIndex + currentHeading.length;
            let contentEndIndex = content.length;

            if (nextHeading) {
                const nextIndex = content.indexOf(nextHeading, contentStartIndex);
                if (nextIndex !== -1) {
                    contentEndIndex = nextIndex;
                }
            }
            vertices[headings[i]] = content.substring(contentStartIndex, contentEndIndex).trim();
        }

        if (Object.keys(vertices).length !== 4) return null;

        return { V1: vertices.V1, V2: vertices.V2, V3: vertices.V3, V4: vertices.V4 };
    }

    async connectToServer() {
        if (Platform.isMobile) {
            new Notice('Shared Brain connection is not available on mobile.');
            return;
        }

        if (!this.settings.serverUrl || !this.settings.walletAddress || !this.settings.peerId) {
            new Notice('Please configure server URL, wallet address, and Peer ID in settings.');
            return;
        }

        try {
            await this.client.connect(this.settings.serverUrl);
            this.client.connectPeer(this.settings.walletAddress, this.settings.peerId);
            new Notice('Connected to Opencode Agent Server!');

            this.client.onMessage(async (message) => {
                if (message.type === '/peer/message' && message.payload.type === 'node_update') {
                    const update = message.payload as NodeUpdateMessage;
                    new Notice(`Received update for node: ${update.nodeId.substring(0, 12)}...`);
                }

                if (message.type === '/graph/proof_response' && message.payload) {
                    const { root, timestamp, proof, value } = message.payload;
                    if(!root || !timestamp || !proof || !value) {
                        new Notice(`❌ Proof response invalid`);
                        return;
                    }
                    const verifiedValue = await verifyProof(root, String(timestamp), proof);

                    if (verifiedValue && verifiedValue === value) {
                        new Notice(`✅ Proof VALID for timestamp ${timestamp}`);
                    } else {
                        new Notice(`❌ Proof INVALID for timestamp ${timestamp}`);
                    }
                }
            });

        } catch (error) {
            new Notice('Failed to connect to server. See console for details.');
            console.error(error);
        }
    }

    async visualizeGraph() {
        let leaf: WorkspaceLeaf | null = null;
        const leaves = this.app.workspace.getLeavesOfType(GRAPH_VIEW_TYPE);

        if (leaves.length > 0) {
            leaf = leaves[0];
        } else {
            leaf = this.app.workspace.getRightLeaf(false);
            await leaf.setViewState({ type: GRAPH_VIEW_TYPE, active: true });
        }

        this.app.workspace.revealLeaf(leaf);
    }
}
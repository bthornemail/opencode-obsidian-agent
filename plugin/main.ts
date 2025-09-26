import { App, Notice, Plugin, WorkspaceLeaf, Platform, TFile, TAbstractFile } from 'obsidian';
import { OpencodeAgentClient } from './src/client';
import { IToolCommand, verifyProof } from '@opencode-v5/core';

// ... (imports)

export default class OpencodeAgentPlugin extends Plugin {
    // ... (properties)

    async onload() {
        // ... (onload logic)

        this.addCommand({
            id: 'wikify-document',
            name: 'Wikify document (Agent Assist)',
            callback: () => this.wikifyDocument(),
        });

        this.addCommand({
            id: 'verify-node-history',
            name: 'Verify node history',
            callback: () => this.verifyNodeHistory(),
        });

        this.addCommand({
            id: 'publish-node-to-global',
            // ...
        });

        // ... (rest of commands)
    }

    async verifyNodeHistory() {
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('No active file to verify.');
            return;
        }

        const fileFrontmatter = this.app.metadataCache.getFileCache(activeFile)?.frontmatter;
        const nodeId = fileFrontmatter?.['tetranode_id'];
        const timestamp = activeFile.stat.mtime;

        if (!nodeId) {
            new Notice('Active file is not a valid TetraNode.');
            return;
        }

        new Notice(`Requesting proof for ${nodeId.substring(0,12)} at time ${timestamp}...`);
        const response = await this.client.getHistoryProof(nodeId, timestamp);

        if (response.error) {
            new Notice(`Error getting proof: ${response.error}`);
            return;
        }

        const { root, value } = response;
        const proof = response.proof.map((p: string) => Buffer.from(p, 'hex'));

        const verifiedValue = await verifyProof(root, Buffer.from(String(timestamp)), proof);

        if (verifiedValue && verifiedValue.toString() === value) {
            new Notice(`✅ Proof VALID for timestamp ${timestamp}`);
        } else {
            new Notice(`❌ Proof INVALID for timestamp ${timestamp}`);
        }
    }

    async connectToLocalRuntime() {
        // ... (existing function)
    }

    async wikifyDocument() {
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('No active file to wikify.');
            return;
        }

        new Notice(`Wikifying document: ${activeFile.path}...`);
        const response = await this.client.wikifyAndTag(activeFile.path);

        if (response.error) {
            new Notice(`Wikification failed: ${response.error}`);
        } else {
            new Notice(`✅ Document wikified: ${response.message}`);
        }
    }
}

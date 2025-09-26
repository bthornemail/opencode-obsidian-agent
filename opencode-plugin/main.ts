import { App, Notice, Plugin, WorkspaceLeaf, Platform } from 'obsidian';
import { OpencodeAgentClient } from './src/client';
import { TetraNode } from './src/core/TetraNode';
import { NodeUpdateMessage } from './src/core/types';
import { IAgentVaultContext } from './src/core/mcp-types';
import { verifyProof } from './src/core/verification';
import { OpencodeAgentSettingTab, OpencodeAgentSettings, DEFAULT_SETTINGS } from './settings/settings';
import { GraphView, GRAPH_VIEW_TYPE } from './ui/GraphView';
import { CreateVaultModal } from './src/ui/CreateVaultModal';
import { ExecuteShellModal } from './src/ui/ExecuteShellModal';

export default class OpencodeAgentPlugin extends Plugin {
    // ... (properties)

    async onload() {
        // ... (onload logic)

        this.addCommand({
            id: 'commit-agent-state',
            name: 'Commit agent vault state',
            callback: () => {
                // Re-using ExecuteShellModal for simplicity, as it has two inputs.
                const modal = new ExecuteShellModal(this.app, (vaultName, agentId) => {
                    if (vaultName && agentId) {
                        this.client.commitState(vaultName, agentId);
                        new Notice(`Requesting state commit for vault: ${vaultName}`);
                    }
                });
                modal.titleEl.setText("Commit Agent State");
                // @ts-ignore
                modal.settingEl.setName("Agent ID");
                // @ts-ignore
                modal.settingEl.setPlaceholder("e.g., refactoring-agent-01");
                modal.open();
            }
        });

        this.addCommand({
            id: 'enrich-agent-context',
            name: 'Enrich agent vault context',
            callback: () => {
                new CreateVaultModal(this.app, (vaultName) => {
                    if (vaultName) {
                        this.client.enrichContext(vaultName);
                        new Notice(`Requesting context enrichment for vault: ${vaultName}`);
                    }
                }).open();
            }
        });

        this.addCommand({
            id: 'push-context-to-agent',
            name: 'Push context to agent vault',
            callback: () => this.pushContextToAgent(),
        });

        this.addCommand({
            id: 'execute-shell-command',
            name: 'Execute shell command in agent vault',
            callback: () => {
                new ExecuteShellModal(this.app, (vaultName, command) => {
                    if (vaultName && command) {
                        this.client.executeShell(vaultName, command);
                        new Notice(`Executing \"${command}\" in vault: ${vaultName}`);
                    }
                }).open();
            }
        });

        // ... (rest of commands)
    }

    async pushContextToAgent() {
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('No active file to use as context.');
            return;
        }

        const content = await this.app.vault.read(activeFile);

        new CreateVaultModal(this.app, (vaultName) => {
            if (vaultName) {
                const context: IAgentVaultContext = {
                    vaultId: vaultName,
                    currentGoal: content,
                    systemPrompt: "You are an autonomous coding agent.",
                    stateSummary: "Context pushed from user vault.",
                    activeFiles: [activeFile.path],
                    availableTools: ['ExecuteShell']
                };
                this.client.setVaultContext(vaultName, context);
                new Notice(`Pushing context to vault: ${vaultName}`);
            }
        }).open();
    }

    // ... (rest of file)
}
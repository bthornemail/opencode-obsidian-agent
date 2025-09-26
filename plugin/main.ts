import { App, Notice, Plugin, WorkspaceLeaf, Platform, TFile, TAbstractFile } from 'obsidian';
import { OpencodeAgentClient } from './src/client';
import { IToolCommand, TetraNode, NodeUpdateMessage, IAgentVaultContext, verifyProof } from '@opencode-v5/core';
import { OpencodeAgentSettingTab, OpencodeAgentSettings, DEFAULT_SETTINGS } from './settings/settings';
import { GraphView, GRAPH_VIEW_TYPE } from './ui/GraphView';
import { CreateVaultModal } from './src/ui/CreateVaultModal';
import { ExecuteShellModal } from './src/ui/ExecuteShellModal';

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
            id: 'publish-node-to-global',
            name: 'Publish node to global network',
            callback: () => this.publishNode(),
        });

        this.addCommand({
            id: 'connect-to-local-runtime',
            name: 'Connect to local agent runtime',
            callback: () => this.connectToLocalRuntime(),
        });

        this.addCommand({
            id: 'create-new-agent-vault',
            name: 'Create new agent vault',
            callback: () => {
                new CreateVaultModal(this.app, (vaultName) => {
                    if (vaultName) {
                        this.client.createAgentVault(vaultName);
                        new Notice(`Requesting creation of vault: ${vaultName}`);
                    }
                }).open();
            }
        });

        this.addCommand({
            id: 'execute-shell-command',
            name: 'Execute shell command in agent vault',
            callback: () => {
                new ExecuteShellModal(this.app, (vaultName, command) => {
                    if (vaultName && command) {
                        this.client.executeShell(vaultName, command);
                        new Notice(`Executing "${command}" in vault: ${vaultName}`);
                    }
                }).open();
            }
        });

        this.addCommand({
            id: 'push-context-to-agent',
            name: 'Push context to agent vault',
            callback: () => this.pushContextToAgent(),
        });

        this.app.workspace.onLayoutReady(() => {
            this.connectToLocalRuntime();

            // Register the file modification event handler
            this.registerEvent(
                this.app.vault.on('modify', this.handleFileModify.bind(this))
            );
        });
        console.timeEnd("OpencodeAgentPlugin onload");
    }

    handleFileModify(file: TAbstractFile) {
        if (file instanceof TFile && file.extension === 'md' && file.path.startsWith('notes/')) {
            console.log(`User modified: ${file.path}. Notifying runtime.`);
            const command: IToolCommand = {
                id: `obsidian-${Date.now()}`,
                commandName: 'ProcessFile',
                arguments: { filePath: file.path },
                timestamp: Date.now(),
            };
            // The client needs a method to send a generic command
            // I will add this method to the client.
            this.client.sendCommand(command);
        }
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

    async connectToLocalRuntime() {
        if (Platform.isMobile) {
            new Notice('Agent runtime connection is not available on mobile.');
            return;
        }

        try {
            const configFile = this.app.vault.getAbstractFileByPath('agent-config.json');
            if (!configFile || !(configFile instanceof TFile)) {
                new Notice('agent-config.json not found in vault root. Cannot connect to runtime.');
                return;
            }

            const configContent = await this.app.vault.read(configFile);
            const config = JSON.parse(configContent);
            const endpoint = config.pluginEndpoint;

            if (!endpoint) {
                new Notice('pluginEndpoint not found in agent-config.json.');
                return;
            }

            await this.client.connect(endpoint);
            new Notice('Connected to local Agent Runtime!');

            this.client.onMessage(async (message) => {
                if (message.command === 'ExecuteShell') {
                    if (message.error) {
                        new Notice(`Error executing command: ${message.error}`);
                        console.error('Shell Error:', message.stderr);
                    } else {
                        new Notice(`Command finished in ${message.vaultName}.\nOutput: ${message.stdout}`);
                        console.log('Shell Output:', message.stdout);
                        console.error('Shell Stderr:', message.stderr);
                    }
                }
            });

        } catch (error) {
            new Notice('Failed to connect to local agent runtime. Is it running?');
            console.error(error);
        }
    }

    async publishNode() {
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('No active file to publish.');
            return;
        }

        const fileFrontmatter = this.app.metadataCache.getFileCache(activeFile)?.frontmatter;
        const nodeId = fileFrontmatter?.['tetranode_id'];

        if (!nodeId) {
            new Notice('Active file is not a valid TetraNode (missing tetranode_id). First, run the 'Create/update' command.');
            return;
        }

        new Notice(`Publishing node ${nodeId.substring(0,12)}... to global network.`);
        const response = await this.client.publishNode(nodeId);
        if (response.error) {
            new Notice(`Failed to publish: ${response.error}`);
        } else {
            new Notice(`Successfully published node ${nodeId.substring(0,12)}.`);
        }
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
}

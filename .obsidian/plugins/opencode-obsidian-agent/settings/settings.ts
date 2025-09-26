import { App, PluginSettingTab, Setting } from 'obsidian';
import OpencodeAgentPlugin from '../main'; // Correct import path

export interface OpencodeAgentSettings {
    walletAddress: string;
    peerId: string;
    pluginEndpoint: string;
}

export const DEFAULT_SETTINGS: OpencodeAgentSettings = {
    walletAddress: '',
    peerId: `peer-${Date.now()}`,
    pluginEndpoint: 'ws://localhost:8080',
};

export class OpencodeAgentSettingTab extends PluginSettingTab {
    static ID = 'opencode-agent-settings';
    plugin: OpencodeAgentPlugin; // Correct type

    constructor(app: App, plugin: OpencodeAgentPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName('Wallet address')
            .setDesc('Your wallet address for identification.')
            .addText(text => text
                .setPlaceholder('Enter your wallet address')
                .setValue(this.plugin.settings.walletAddress)
                .onChange(async (value) => {
                    this.plugin.settings.walletAddress = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('Peer ID')
            .setDesc('A unique ID for this peer.')
            .addText(text => text
                .setPlaceholder('Enter your Peer ID')
                .setValue(this.plugin.settings.peerId)
                .onChange(async (value) => {
                    this.plugin.settings.peerId = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('Agent Runtime Endpoint')
            .setDesc('The WebSocket URI for the local agent runtime (e.g., ws://localhost:8080).')
            .addText(text => text
                .setPlaceholder('ws://localhost:8080')
                .setValue(this.plugin.settings.pluginEndpoint)
                .onChange(async (value) => {
                    this.plugin.settings.pluginEndpoint = value;
                    await this.plugin.saveSettings();
                }));
    }
}

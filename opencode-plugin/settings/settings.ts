import { App, PluginSettingTab, Setting } from 'obsidian';
import MyPlugin from '../main';

export interface OpencodeAgentSettings {
    walletAddress: string;
    peerId: string;
    serverUrl: string;
}

export const DEFAULT_SETTINGS: OpencodeAgentSettings = {
    walletAddress: '',
    peerId: `peer-${Date.now()}`,
    serverUrl: 'ws://localhost:8080'
};

export class OpencodeAgentSettingTab extends PluginSettingTab {
    plugin: MyPlugin;

    constructor(app: App, plugin: MyPlugin) {
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
            .setName('Server URL')
            .setDesc('The URL of the Opencode Agent server.')
            .addText(text => text
                .setPlaceholder('Enter the server URL')
                .setValue(this.plugin.settings.serverUrl)
                .onChange(async (value) => {
                    this.plugin.settings.serverUrl = value;
                    await this.plugin.saveSettings();
                }));
    }
}

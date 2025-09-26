import { PluginSettingTab, Setting } from 'obsidian';
export const DEFAULT_SETTINGS = {
    walletAddress: '',
    peerId: `peer-${Date.now()}`,
};
export class OpencodeAgentSettingTab extends PluginSettingTab {
    plugin; // Correct type
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
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
    }
}

#!/usr/bin/env node

import { Command } from 'commander';
import { promises as fs } from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';

const program = new Command();

program
    .name('opencode-vault')
    .description('CLI to manage Opencode Obsidian Agentic Vaults');

program
    .command('create <vault-name>')
    // ... (create command implementation)

program
    .command('start <vault-name>')
    .description('Start the agent runtime for a specific vault')
    .option('-p, --port <port>', 'Port for the agent runtime RPC server', '4201')
    .action(async (vaultName, options) => {
        console.log(`Starting agent runtime for vault: ${vaultName}...`);

        const vaultPath = path.join(process.cwd(), 'vaults', 'agents', vaultName);
        const runtimeLogPath = path.join(vaultPath, '.agent.log');
        const runtimePidPath = path.join(vaultPath, '.agent.pid');

        try {
            await fs.access(vaultPath); // Check if vault exists
        } catch (error) {
            console.error(`Error: Vault "${vaultName}" not found at ${vaultPath}`);
            return;
        }

        const logStream = await fs.open(runtimeLogPath, 'a');

        const runtimeProcess = spawn(
            'ts-node',
            [
                path.join(process.cwd(), 'agent-runtime', 'src', 'index.ts'),
                `--vaultPath=${vaultPath}`,
                `--port=${options.port}`
            ],
            {
                detached: true, // Allows parent process to exit
                stdio: ['ignore', logStream.fd, logStream.fd], // Pipe stdout and stderr to log file
                cwd: process.cwd(),
            }
        );

        runtimeProcess.unref(); // Disconnect from parent process

        await fs.writeFile(runtimePidPath, String(runtimeProcess.pid));

        console.log(`✅ Agent runtime for "${vaultName}" started successfully.`);
        console.log(`   PID: ${runtimeProcess.pid} (saved to ${runtimePidPath})`);
        console.log(`   Logs are being written to ${runtimeLogPath}`);
    });

program.parse(process.argv);

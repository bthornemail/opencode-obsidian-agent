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
    .command('build <vault-name>')
    .description('Build a Docker image for the specified agent vault runtime')
    .action(async (vaultName) => {
        const imageName = `runtime-${vaultName.toLowerCase()}`;
        console.log(`Building Docker image: ${imageName}...`);

        const buildProcess = spawn('docker', [
            'build',
            '-t',
            imageName,
            '-f',
            'runtime/Dockerfile',
            '.' // Build context is the root of the monorepo
        ], {
            stdio: 'inherit', // Stream the build output to the user's console
            cwd: process.cwd(),
        });

        buildProcess.on('close', (code) => {
            if (code === 0) {
                console.log(`✅ Successfully built image: ${imageName}`);
            } else {
                console.error(`❌ Docker build failed with code ${code}`);
            }
        });
    });

program
    .command('start <vault-name>')
    .description('Start the agent runtime for a specific vault')
    .option('-p, --port <port>', 'Port for the agent runtime RPC server', '4201')
    .option('--docker', 'Run the agent runtime inside a Docker container')
    .action(async (vaultName, options) => {
        const vaultPath = path.join(process.cwd(), 'vaults', 'agents', vaultName);
        const runtimePidPath = path.join(vaultPath, '.agent.pid');

        try {
            await fs.access(vaultPath); // Check if vault exists
        } catch (error) {
            console.error(`Error: Vault "${vaultName}" not found at ${vaultPath}`);
            return;
        }

        if (options.docker) {
            // --- Docker Execution ---
            const imageName = `runtime-${vaultName.toLowerCase()}`;
            console.log(`Starting agent runtime for vault "${vaultName}" using Docker image: ${imageName}...`);

            const runProcess = spawn('docker', [
                'run',
                '-d', // Detached mode
                '--rm', // Automatically remove the container on exit
                '-p', `${options.port}:4201`,
                '-v', `${vaultPath}:/vault`,
                imageName,
                '--vaultPath=/vault' // Argument for the runtime inside the container
            ], {
                detached: true,
                stdio: 'ignore',
            });

            runProcess.unref();
            // Note: Getting the container ID to save as a PID is more complex, skipping for this implementation.
            console.log(`✅ Agent runtime for "${vaultName}" started in Docker.`);
            console.log(`   Container is running in detached mode. Use 'docker ps' to see it.`);

        } else {
            // --- Local ts-node Execution ---
            console.log(`Starting agent runtime for vault "${vaultName}" locally...`);
            const runtimeLogPath = path.join(vaultPath, '.agent.log');
            const logStream = await fs.open(runtimeLogPath, 'a');

            const runtimeProcess = spawn(
                'ts-node',
                [
                    path.join(process.cwd(), 'runtime', 'src', 'index.ts'),
                    `--vaultPath=${vaultPath}`,
                    `--port=${options.port}`
                ],
                {
                    detached: true,
                    stdio: ['ignore', logStream.fd, logStream.fd],
                    cwd: process.cwd(),
                }
            );

            runtimeProcess.unref();
            await fs.writeFile(runtimePidPath, String(runtimeProcess.pid));
            console.log(`✅ Agent runtime for "${vaultName}" started successfully.`);
            console.log(`   PID: ${runtimeProcess.pid} (saved to ${runtimePidPath})`);
            console.log(`   Logs are being written to ${runtimeLogPath}`);
        }
    });

program.parse(process.argv);

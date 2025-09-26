import { promises as fs } from 'fs';
import * as path from 'path';
import { exec } from 'child_process';
import { WebSocketServer, WebSocket } from 'ws';
import { Trie } from 'merkle-patricia-tree';
import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';
import { WordNet } from 'wordnet';
import { CID } from 'multiformats/cid';
import * as Block from 'multiformats/block';
import { sha256 } from 'multiformats/hashes/sha2';
import * as dagPb from '@ipld/dag-pb';
import { IToolCommand, IAgentVaultContext } from './core/mcp-types';

// ... (rest of file until handleToolCommand)

async function handleToolCommand(ws: WebSocket, command: IToolCommand, senderPeerId: string) {
    // ... (switch statement)
        case 'EnrichContext':
            await handleEnrichContext(ws, command.arguments as any);
            break;
        case 'CommitState':
            await handleCommitState(ws, command.arguments as any);
            break;
        // ... (default case)
}

// ... (other handlers)

async function handleCommitState(ws: WebSocket, args: { vaultName: string; agentId: string }) {
    const { vaultName, agentId } = args;
    if (!vaultName) {
        ws.send(JSON.stringify({ error: 'Invalid arguments for CommitState.' }));
        return;
    }

    const agentVaultsPath = path.join(process.cwd(), 'vaults', 'agents');
    const targetVaultPath = path.join(agentVaultsPath, vaultName);
    
    try {
        // 1. Bundle directory contents into a single object
        const vaultState: { [key: string]: string } = {};
        const dirsToBundle = ['vault-context', 'code-projects'];
        for (const dir of dirsToBundle) {
            const dirPath = path.join(targetVaultPath, dir);
            try {
                const files = await fs.readdir(dirPath, { withFileTypes: true });
                for (const file of files) {
                    if (file.isFile()) {
                        const filePath = path.join(dirPath, file.name);
                        const content = await fs.readFile(filePath, 'utf-8');
                        vaultState[`${dir}/${file.name}`] = content;
                    }
                }
            } catch (e) { /* Ignore if dir doesn't exist */ }
        }

        // 2. Generate CID
        const block = await Block.encode({ value: vaultState, codec: dagPb, hasher: sha256 });
        const cid = block.cid;

        // 3. Update manifest
        const historyPath = path.join(targetVaultPath, '.immutable-history');
        await fs.mkdir(historyPath, { recursive: true });
        const manifestPath = path.join(historyPath, 'manifest.json');
        let manifest = [];
        try {
            const manifestFile = await fs.readFile(manifestPath, 'utf-8');
            manifest = JSON.parse(manifestFile);
        } catch (e) { /* Manifest doesn't exist, will be created */ }

        manifest.push({ cid: cid.toString(), timestamp: Date.now(), agentId });
        await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

        console.log(`State committed for vault ${vaultName}. CID: ${cid.toString()}`);
        ws.send(JSON.stringify({ status: 'success', message: `State committed for ${vaultName}`, cid: cid.toString() }));

    } catch (error) {
        console.error(`Error committing state for ${vaultName}:`, error);
        ws.send(JSON.stringify({ error: 'Failed to commit state.' }));
    }
}

async function handleEnrichContext(ws: WebSocket, args: { vaultName: string }) {
    const { vaultName } = args;
    if (!vaultName) {
        ws.send(JSON.stringify({ error: 'Invalid arguments for EnrichContext.' }));
        return;
    }

    const agentVaultsPath = path.join(process.cwd(), 'vaults', 'agents');
    const targetVaultPath = path.join(agentVaultsPath, vaultName);
    const contextFilePath = path.join(targetVaultPath, 'vault-context', 'context.json');

    try {
        // 1. Read the existing context
        const contextFile = await fs.readFile(contextFilePath, 'utf-8');
        const context: IAgentVaultContext & { enrichedContext?: any } = JSON.parse(contextFile);

        // 2. Process with NLP libraries
        const nlp = winkNLP(model);
        const doc = nlp.readDoc(context.currentGoal);
        const entities = doc.entities().out();
        const nouns = doc.tokens().out(nlp.its.pos, nlp.as.freqTable).filter((t: any) => t.pos === 'NOUN');

        const wordnet = new WordNet();
        const definitions: { [key: string]: any } = {};
        for (const noun of nouns) {
            const results = await new Promise((resolve) => wordnet.lookup(noun.value, resolve));
            if (results.length > 0) {
                definitions[noun.value] = results.map((r: any) => r.gloss).slice(0, 2); // Get first 2 definitions
            }
        }

        // 3. Enrich the context object
        context.enrichedContext = {
            entities,
            nounDefinitions: definitions,
        };

        // 4. Write the enriched context back to the file
        await fs.writeFile(contextFilePath, JSON.stringify(context, null, 2));

        console.log(`Context successfully enriched for vault: ${vaultName}`);
        ws.send(JSON.stringify({ status: 'success', message: `Context enriched for ${vaultName}.` }));

    } catch (error) {
        console.error(`Error enriching context for ${vaultName}:`, error);
        ws.send(JSON.stringify({ error: 'Failed to enrich context file.' }));
    }
}

// ... (rest of file)

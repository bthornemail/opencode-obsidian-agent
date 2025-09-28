#!/usr/bin/env node
/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import chalk from 'chalk';
import { Command } from 'commander';
import { ArithmeticsLanguageMetaData } from '../generated/module.js';
import { evalAction, generateAction } from './actions.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const program = new Command();

(async () => {
    const packagePath = path.resolve(__dirname, '..', '..', 'package.json');
    const packageContent = await fs.readFile(packagePath, 'utf-8');
    program.version(JSON.parse(packageContent).version);
})();

program
    .command('eval')
    .argument('<file>', `possible file extensions: ${ArithmeticsLanguageMetaData.fileExtensions.join(', ')}`)
    .description('calculates Evaluations in the source file')
    .action(evalAction);

program
    .command('generate')
    .argument('<file>', 'source file')
    .option('-d, --destination <dir>', 'destination directory of generating')
    .description('generates code from the source file')
    .action(generateAction);

program.parse(process.argv);

/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import type { AstNode } from 'langium';
import chalk from 'chalk';
import { extractDocument } from './cli-util.js';
import { createDomainDslServices } from '../domain-dsl-module.js';
import { NodeFileSystem } from 'langium/node';
import { generateSummary } from './generator.js';
import { interpretEvaluations } from './interpreter.js';

export async function evalAction(fileName: string): Promise<void> {
    const services = createDomainDslServices(NodeFileSystem).arithmetics;
    const model = await extractDocument<AstNode>(fileName, services);
    const evaluations = interpretEvaluations(model);
    for (const [value, astNode] of evaluations) {
        const cstNode = astNode.$cstNode;
        if (cstNode) {
            const line = cstNode.range.start.line + 1;
            const column = cstNode.range.start.character + 1;
            console.log(`${fileName}:${line}:${column} - ${chalk.green(cstNode.text)} -> ${chalk.yellow(value)}`);
        }
    }
}

export async function generateAction(fileName: string, opts: { destination: string | undefined }): Promise<void> {
    const services = createDomainDslServices(NodeFileSystem);
    if (fileName.endsWith('.req')) {
        const model = await extractDocument<any>(fileName, services.requirements);
        const testModels = await Promise.all(
            services.shared.workspace.TextDocuments.all
                .filter(doc => doc.uri.fsPath.endsWith('.tst'))
                .map(doc => extractDocument<any>(doc.uri.fsPath, services.tests))
        );
        const generatedFilePath = generateSummary(model, testModels, fileName, opts.destination);
        console.log(chalk.green(`HTML summary generated successfully: ${generatedFilePath}`));
    } else {
        console.log(chalk.red(`Cannot generate code for ${fileName}: unknown file extension.`));
    }
}

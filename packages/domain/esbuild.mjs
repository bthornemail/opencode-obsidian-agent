import esbuild from 'esbuild';
import path from 'path';
import fs from 'fs';

const isWatch = process.argv.includes('--watch');

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'));

const commonConfig = {
    bundle: true,
    sourcemap: true,
    external: Object.keys(packageJson.dependencies).concat(Object.keys(packageJson.devDependencies)),
    logLevel: 'info',
    platform: 'node',
    target: 'es2020',
};

const extensionConfig = {
    ...commonConfig,
    entryPoints: ['src/main.ts'],
    outfile: 'out/main.cjs',
    format: 'cjs',
};

const cliConfig = {
    ...commonConfig,
    entryPoints: ['src/cli/cli.ts'],
    outfile: 'bin/cli.js',
    format: 'esm',
};

if (isWatch) {
    esbuild.context(extensionConfig).then(ctx => ctx.watch());
    esbuild.context(cliConfig).then(ctx => ctx.watch());
} else {
    esbuild.build(extensionConfig);
    esbuild.build(cliConfig);
}

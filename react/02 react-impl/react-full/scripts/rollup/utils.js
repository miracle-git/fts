import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(name, dist) {
	return dist ? `${distPath}/${name}` : `${pkgPath}/${name}`;
}

export function getPkgConfig(name) {
	const path = `${resolvePkgPath(name)}/package.json`;
	const content = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(content);
}

export function getRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}

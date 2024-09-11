import generatePackageJson from 'rollup-plugin-generate-package-json';
import { resolvePkgPath, getPkgConfig, getRollupPlugins } from './utils';

const { name, module } = getPkgConfig('react');
const pkgPath = resolvePkgPath(name);
const distPath = resolvePkgPath(name, true);

export default [
	// react
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${distPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			...getRollupPlugins(),
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: distPath,
				baseContents: ({ name, version, description }) => ({
					name,
					version,
					description,
					main: 'index.js'
				})
			})
		]
	},
	// jsx-runtime
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			{
				file: `${distPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd'
			},
			{
				file: `${distPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				format: 'umd'
			}
		],
		plugins: getRollupPlugins()
	}
];

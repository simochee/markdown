import typescript from "@rollup/plugin-typescript";
import deepMerge from "deepmerge";

/** @typedef {import('rollup').RollupOptions} RollupOptions */

/** @type {(pkg: any, extend?: RollupOptions) => RollupOptions} */
export const getConfig = (pkg, extend = {}) => {
	/** @type {RollupOptions['external']} */
	const external = Object.keys(pkg.peerDependencies || {});

	/** @type {RollupOptions} */
	const base = {
		input: "src/index.ts",
		output: [
			{
				file: pkg.exports["."].require,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: pkg.exports["."].import,
				format: "es",
				sourcemap: true,
			},
		],
		external,
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json",
				outDir: "./dist",
				declaration: true,
			}),
		],
	};

	return deepMerge(base, extend);
};

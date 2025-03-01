import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" with { type: "json" };

/** @type {import('rollup').RollupOptions[]} */
export default [
	{
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
		external: ["mdast"],
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json",
				outDir: "./dist",
				declaration: true,
			}),
		],
	},
];

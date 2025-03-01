import { getConfig } from "@internal/rollup-config";
import pkg from "./package.json" with { type: "json" };

/** @type {import('rollup').RollupOptions[]} */
export default [getConfig(pkg)];

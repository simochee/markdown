import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const config: StorybookConfig = {
	stories: ["../**/*.stories.tsx"],
	addons: ["@storybook/addon-essentials"],
	framework: "@storybook/react-vite",
	viteFinal: async (config) => {
		const { default: tailwindcss } = await import("@tailwindcss/vite");

		return mergeConfig(config, {
			plugins: [nodePolyfills(), tailwindcss()],
		});
	},
};

export default config;

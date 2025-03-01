import shiki, { type RehypeShikiOptions } from "@shikijs/rehype";
import { rehypeGithubAlerts } from "rehype-github-alerts";
import stringify from "rehype-stringify";
import breaks from "remark-breaks";
import gfm from "remark-gfm";
import rehype from "remark-rehype";
import type { Preset } from "unified";

const remarkPreset: Preset = {
	plugins: [
		gfm,
		breaks,
		rehype,
		[
			shiki,
			{
				theme: "catppuccin-latte",
			} satisfies RehypeShikiOptions,
		],
		rehypeGithubAlerts,
		stringify,
	],
};

export default remarkPreset;

import plugin from "tailwindcss/plugin";

const myPlugin = plugin.withOptions(
	() => {
		return ({ addVariant, addComponents, theme, prefix }) => {
			addComponents({
				".markdown": {
					color: "red",
				},
			});
		};
	},
	() => ({
		theme: {
			simocheeMarkdown: {},
		},
	}),
);

export default myPlugin;

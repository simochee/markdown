import type { Root } from "mdast";
import type { Plugin } from "unified";

const remarkPlugin: Plugin<[], Root> = () => {
	return (tree) => {
		console.log(tree);
	};
};

export default remarkPlugin;

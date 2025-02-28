import remarkPlugin from "@simochee-markdown/remark-plugin";
import { useEffect } from "react";
import { useRemark } from "react-remark";
import article from "../../assets/article.md?raw";

export const Markdown: React.FC = () => {
	const [content, setSource] = useRemark({ remarkPlugins: [remarkPlugin] });

	useEffect(() => {
		setSource(article);
	}, [setSource]);

	return <div>{content}</div>;
};

import remarkPlugin from "@simochee-markdown/remark-plugin";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import article from "../../assets/article.md?raw";

export const Markdown: React.FC = () => {
	const [content, setContent] = useState<string>();

	useEffect(() => {
		remark()
			.use(remarkPlugin)
			.use(html)
			.process(article)
			.then((file) => {
				if (typeof file.value === "string") {
					setContent(file.value);
				}
			});
	}, []);

	if (!content) {
		return <p>loading...</p>;
	}

	return (
		<div>
			<div
				// biome-ignore lint/security/noDangerouslySetInnerHtml: markdown content
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

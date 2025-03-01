import remarkPlugin from "@simochee-markdown/remark-plugin";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

type Props = {
	children: string;
};

export const Markdown: React.FC<Props> = ({ children }) => {
	const [content, setContent] = useState<string>();

	useEffect(() => {
		remark()
			.use(remarkPlugin)
			.use(html)
			.process(children)
			.then((file) => {
				if (typeof file.value === "string") {
					setContent(file.value);
				}
			});
	}, [children]);

	if (!content) {
		return <p>loading...</p>;
	}

	return (
		<div>
			<div
				className="markdown"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: markdown content
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

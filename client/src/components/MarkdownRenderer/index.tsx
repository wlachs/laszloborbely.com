import ReactMarkdown from 'react-markdown';

function MarkdownRenderer({content}: {
	content: string;
}) {
	return (
		<ReactMarkdown>
			{content}
		</ReactMarkdown>
	);
}

export default MarkdownRenderer;

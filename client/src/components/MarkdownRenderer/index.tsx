import './index.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkdownRenderer({content}: {
	content: string;
}) {
	return (
		<ReactMarkdown className='d-flex flex-column markdown' remarkPlugins={[remarkGfm]}>
			{content}
		</ReactMarkdown>
	);
}

export default MarkdownRenderer;

import './index.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkdownRenderer({content}: {
	content: string;
}) {
	return (
		<ReactMarkdown className='d-flex flex-column markdown col-11 col-lg-12' remarkPlugins={[remarkGfm]}>
			{content}
		</ReactMarkdown>
	);
}

export default MarkdownRenderer;

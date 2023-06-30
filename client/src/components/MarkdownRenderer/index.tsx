import './index.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

function MarkdownRenderer({content}: {
	content: string;
}) {
	return (
		<ReactMarkdown className='d-flex flex-column markdown col-11 col-lg-12'
			remarkPlugins={[remarkGfm]}
			components={{
				code({node, inline, className, children, ...props}) {
					const match = /language-(\w+)/.exec(className ?? '');
					return !inline && match ? (
						<SyntaxHighlighter
							language={match[1]}>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code {...props} className={className}>
							{children}
						</code>
					);
				},
			}}>
			{content}
		</ReactMarkdown>
	);
}

export default MarkdownRenderer;

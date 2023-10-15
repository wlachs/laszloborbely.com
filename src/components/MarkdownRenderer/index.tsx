import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import './index.css';

function MarkdownRenderer({content}: {
	content: string;
}) {
	return (
		<ReactMarkdown className='markdown-body'
			remarkPlugins={[remarkGfm]}
			components={{
				code({node, className, children, ...props}) {
					const match = /language-(\w+)/.exec(className ?? '');
					return match ? (
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

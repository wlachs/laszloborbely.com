import './index.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

function MarkdownRenderer({content}: {
	content: string;
}) {
	return (
		<ReactMarkdown className='markdown-body col-11 col-xxl-8'
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

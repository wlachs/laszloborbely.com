import './index.css';

import { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
	content: string;
}

export function MarkdownRenderer({
	content,
}: MarkdownRendererProps): ReactElement {
	return (
		<ReactMarkdown
			className='markdown-body'
			remarkPlugins={[remarkGfm]}
			components={{
				code({ className, children, ...props }) {
					const match = /language-(\w+)/.exec(className ?? '');
					return match ?
							<SyntaxHighlighter
								language={match[1]}
								style={style}>
								{String(children).replace(/\n$/, '')}
							</SyntaxHighlighter>
						:	<code {...props} className={className}>
								{children}
							</code>;
				},
			}}>
			{content}
		</ReactMarkdown>
	);
}

import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { ContentRow } from '../components/ContentRow';
import { Frame } from '../components/Frame';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { PostMetadata } from '../components/PostMetadata';
import { pageTitleSuffix } from '../config';
import { type BlogPostData } from '../network/types/blog';

export function BlogPost() {
	const post: BlogPostData = useLoaderData() as BlogPostData;
	const pageTitle = [post.title, pageTitleSuffix].join(' | ');

	return (
		<Frame>
			<Container>
				{/* Page title */}
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				{/* Page content */}
				<Content>
					<ContentRow>
						<PostMetadata post={post} />
					</ContentRow>
					<ContentRow>
						<MarkdownRenderer content={post.body} />
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}

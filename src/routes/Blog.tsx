import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { ContentRow } from '../components/ContentRow';
import { Frame } from '../components/Frame';
import { Posts } from '../components/Posts';
import { pageTitleSuffix } from '../config';
import { type BlogPostData } from '../network/types/blog';

export function Blog() {
	const pageTitle = pageTitleSuffix;
	const posts: BlogPostData[] = (useLoaderData() || []) as BlogPostData[];

	return (
		<Frame>
			<Container>
				{/* Page title */}
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				{/* Page content */}
				<ContentRow>
					<h1>Hi! I&apos;m László.</h1>
					<p>
						Feel free to check out my latest posts. Who knows,
						perhaps you&apos;ll find something interesting.
					</p>
				</ContentRow>
				<Content>
					<ContentRow>
						<Posts posts={posts} />
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}

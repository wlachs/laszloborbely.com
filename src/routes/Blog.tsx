import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

import Container from '../components/Container';
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';
import Frame from '../components/Frame';
import Posts from '../components/Posts';
import { pageTitleSuffix } from '../config.js';
import { type BlogPostData } from '../network/types/blog.ts';

function Blog() {
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

export default Blog;

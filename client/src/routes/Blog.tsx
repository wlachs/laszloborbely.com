// React imports
import {Helmet} from 'react-helmet-async';

// Router imports
import {useLoaderData} from 'react-router-dom';

// Component imports
import Container from '../components/Container';
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';
import Posts from '../components/Posts';

// Config imports
import {pageTitlePrefix} from '../config.js';
import Frame from '../components/Frame';
import {type BlogPostData} from '../types/blog.ts';

function Blog() {
	const name = 'Blog';
	const pageTitle = pageTitlePrefix + name;
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
					<h1>László Borbély</h1>
				</ContentRow>
				<ContentRow>
					<h2>Full-Stack Software Engineer</h2>
				</ContentRow>
				<Content>
					<ContentRow>
						<Posts posts={posts}/>
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}

export default Blog;

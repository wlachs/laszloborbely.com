// React imports
import {Helmet} from 'react-helmet-async';

// Router imports
import {useLoaderData} from 'react-router-dom';

// Component imports
import Container from '../components/Container';
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';
import Frame from '../components/Frame';
import Posts from '../components/Posts';

// Config imports
import {pageTitleSuffix} from '../config.js';
import {type BlogPostData} from '../network/types/blog.ts';

function Blog() {
	const name = 'Blog';
	const pageTitle = name + pageTitleSuffix;
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
					<p><h1>László&apos;s developer blog</h1></p>
					<p>
                        Feel free to check out my latest posts. Who knows, perhaps you&apos;ll find something interesting.
					</p>
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

// React imports
// Other imports
import {Helmet} from 'react-helmet-async';

// Router imports
import {useLoaderData} from 'react-router-dom';

// Component imports
import Container from '../components/Container';
import Content from '../components/Content';
import ContentRow from '../components/ContentRow/index.jsx';
import Frame from '../components/Frame';
import MarkdownRenderer from '../components/MarkdownRenderer';
import PostMetadata from '../components/PostMetadata';
import PostTitle from '../components/PostTitle';

// Config imports
import {pageTitleSuffix} from '../config.js';
import {type BlogPostData} from '../network/types/blog.ts';

function BlogPost() {
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
						<PostTitle post={post}/>
					</ContentRow>
					<ContentRow>
						<PostMetadata post={post}/>
					</ContentRow>
					<ContentRow>
						<MarkdownRenderer content={post.body}/>
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}

export default BlogPost;

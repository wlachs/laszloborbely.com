// React imports
import {Helmet} from 'react-helmet-async';

// Router imports
import {useLoaderData} from 'react-router-dom';

// Component imports
import Container from '../components/Container';
import ContentRow from '../components/ContentRow/index.jsx';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Config imports
import {pageTitlePrefix} from '../config.js';
import Frame from '../components/Frame';
import {type BlogPostData} from '../types/blog.ts';

// Other imports
import moment from 'moment';
import Content from '../components/Content';

function BlogPost() {
	const post: BlogPostData = useLoaderData() as BlogPostData;
	const pageTitle = pageTitlePrefix + post.title;
	const timestamp = moment(post.creationTime).calendar();

	return (
		<Frame>
			<Container>
				{/* Page title */}
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				{/* Page content */}
				<ContentRow>
					<h1>{post.title}</h1>
				</ContentRow>
				<ContentRow>
					<h2>{timestamp}</h2>
				</ContentRow>
				<Content>
					<ContentRow>
						<MarkdownRenderer content={post.body}/>
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}

export default BlogPost;

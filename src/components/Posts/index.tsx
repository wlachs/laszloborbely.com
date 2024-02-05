import './index.css';

import moment from 'moment';
import { NavLink } from 'react-router-dom';

import { type BlogPostData } from '../../network/types/blog';

function Post({ post }: { post: BlogPostData }) {
	const link = `/blog/${post.urlHandle}`;

	return (
		<NavLink className='post w-100 py-3' to={link}>
			<div className='left-segment'>
				<h3 className='title mb-1'>{post.title}</h3>
				<div className='summary mt-1'>{post.summary}</div>
			</div>
			<div className='right-segment d-none d-md-block'>
				<label>{moment(post.creationTime).fromNow()}</label>
			</div>
		</NavLink>
	);
}

export function Posts(props: { posts: BlogPostData[] }) {
	const posts = props.posts.map(p => <Post key={p.urlHandle} post={p} />);

	return (
		<div className='posts w-100'>
			{posts.length > 0 ?
				posts
			:	<p className='text-center mt-3'>
					No posts found, come back later!
				</p>
			}
		</div>
	);
}

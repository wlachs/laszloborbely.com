import './index.css';

import moment from 'moment';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { type BlogPostData } from '../../network/types/blog';

interface PostsProps {
	data: BlogPostData[];
}

export function Posts({ data }: PostsProps): ReactElement {
	const posts = data.map(p => <Post key={p.urlHandle} post={p} />);

	return (
		<div className='posts'>
			{posts.length > 0 ?
				posts
			:	<p className='mt-3 text-center'>
					No posts found, come back later!
				</p>
			}
		</div>
	);
}

interface PostProps {
	post: BlogPostData;
}

function Post({ post }: PostProps): ReactElement {
	const link = `/blog/${post.urlHandle}`;

	return (
		<NavLink className='post py-3' to={link}>
			<div className='left-segment'>
				<h3 className='title mb-1'>{post.title}</h3>
				<div className='summary mt-1'>{post.summary}</div>
			</div>
			<div className='right-segment hidden md:block'>
				<span>{moment(post.creationTime).fromNow()}</span>
			</div>
		</NavLink>
	);
}

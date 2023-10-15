import moment from 'moment';
import {NavLink} from 'react-router-dom';
import {type BlogPostData} from '../../network/types/blog.ts';
import './index.css';

function Post({post}: {
	post: BlogPostData;
}) {
	const link = `/blog/${post.urlHandle}`;

	return (
		<NavLink className='post w-100 py-3 px-3 px-lg-2' to={link}>
			<div className='left-segment'>
				<h3 className='title mb-1'>{post.title}</h3>
				<div className='summary mt-1 fst-italic small'>{post.summary}</div>
			</div>
			<div className='right-segment small'>
				<div>{moment(post.creationTime).fromNow()}</div>
			</div>
		</NavLink>
	);
}

function Posts(props: {
	posts: BlogPostData[];
}) {
	const posts = props.posts.map(p => <Post key={p.urlHandle} post={p}/>);

	return (
		<div className='posts w-100'>
			{posts.length > 0
				? posts
				: <p className='text-center mt-3'>No posts found, come back later!</p>
			}
		</div>
	);
}

export default Posts;

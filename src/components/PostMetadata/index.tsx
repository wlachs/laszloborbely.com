import moment from 'moment/moment';
import {type BlogPostData} from '../../network/types/blog.ts';
import './index.css';

function PostMetadata({post}: {
	post: BlogPostData;
}) {
	const dateFormat = 'LL';
	const timestamp = moment(post.creationTime).format(dateFormat);
	return (
		<div className='d-flex justify-content-between gap-3'>
			<h1>{post.title}</h1>
			<label className='timestamp'>{timestamp}</label>
		</div>
	);
}

export default PostMetadata;

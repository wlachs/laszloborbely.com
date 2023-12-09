import moment from 'moment/moment';
import {type BlogPostData} from '../../network/types/blog.ts';
import './index.css';

function PostMetadata({post}: {
	post: BlogPostData;
}) {
	const dateFormat = 'LL';
	const timestamp = moment(post.creationTime).format(dateFormat);
	return (
		<div className='d-flex flex-column flex-lg-row justify-content-lg-between gap-lg-3 pb-3 pb-lg-0'>
			<h1>{post.title}</h1>
			<label className='timestamp'>{timestamp}</label>
		</div>
	);
}

export default PostMetadata;

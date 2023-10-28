import moment from 'moment/moment';
import {NavLink} from 'react-router-dom';
import {type BlogPostData} from '../../network/types/blog.ts';

function PostMetadata({post}: {
	post: BlogPostData;
}) {
	const dateFormat = 'DD.MM.YYYY | HH:mm';
	const timestamp = moment(post.creationTime).format(dateFormat);
	return (
		<div className='small'>
			{timestamp} | <NavLink to='/contact'>{post.author}</NavLink>
		</div>
	);
}

export default PostMetadata;

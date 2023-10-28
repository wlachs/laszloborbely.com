import moment from 'moment/moment';
import {NavLink} from 'react-router-dom';
import {type BlogPostData} from '../../network/types/blog.ts';

function PostMetadata({post}: {
	post: BlogPostData;
}) {
	const dateFormat = 'LL';
	const timestamp = moment(post.creationTime).format(dateFormat);
	return (
		<div>
			<NavLink to='/contact'>{post.author}</NavLink> • {timestamp}
		</div>
	);
}

export default PostMetadata;

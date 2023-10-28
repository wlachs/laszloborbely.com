import {type BlogPostData} from '../../network/types/blog.ts';

function PostTitle({post}: {
	post: BlogPostData;
}) {
	return (
		<h1>{post.title}</h1>
	);
}

export default PostTitle;

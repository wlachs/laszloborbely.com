import './index.css';

import moment from 'moment/moment';
import { ReactElement } from 'react';

import { type BlogPostData } from '../../network/types/blog';

interface PostMetadataProps {
	post: BlogPostData;
}

export function PostMetadata({ post }: PostMetadataProps): ReactElement {
	const dateFormat = 'LL';
	const timestamp = moment(post.creationTime).format(dateFormat);
	return (
		<div className='pb-2'>
			<h1>{post.title}</h1>
			<span className='timestamp'>{timestamp}</span>
		</div>
	);
}

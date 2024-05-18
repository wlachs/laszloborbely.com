import axios from 'axios';

import { type BlogPostData } from './types/blog';

export async function getPosts(): Promise<BlogPostData[]> {
	const { data } = await axios.get<BlogPostData[]>('/api/v0/posts');
	return data;
}

export async function getPost(urlHandle: string): Promise<BlogPostData> {
	const { data } = await axios.get<BlogPostData>(
		`/api/v0/posts/${urlHandle}`,
	);
	return data;
}

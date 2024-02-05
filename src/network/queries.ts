import axios from 'axios';

import { type BlogPostData } from './types/blog';

export async function getPosts(): Promise<BlogPostData[]> {
	try {
		const { data } = await axios.get<BlogPostData[]>('/api/blog/posts');
		return data;
	} catch (ignored) {
		return [];
	}
}

export function getPost(id: string) {
	return async function (): Promise<BlogPostData | undefined> {
		const { data } = await axios.get<BlogPostData>(`/api/blog/posts/${id}`);
		return data;
	};
}

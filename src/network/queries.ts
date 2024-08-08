import axios from 'axios';

import { type BlogPostData, BlogPostResponseData } from './types/blog';

export async function getPosts(page: number): Promise<BlogPostResponseData> {
	const { data } = await axios.get<BlogPostResponseData>(
		`/api/v0/posts?page=${page}`,
	);
	return data;
}

export async function getPost(urlHandle: string): Promise<BlogPostData> {
	const { data } = await axios.get<BlogPostData>(
		`/api/v0/posts/${urlHandle}`,
	);
	return data;
}

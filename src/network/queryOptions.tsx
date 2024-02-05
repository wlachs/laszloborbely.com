import { queryOptions, UseQueryOptions } from '@tanstack/react-query';

import { getPost, getPosts } from './queries';
import { BlogPostData } from './types/blog';

export function postsQueryOptions(): UseQueryOptions<
	BlogPostData[],
	Error,
	BlogPostData[],
	string[]
> {
	return queryOptions({
		queryFn: getPosts,
		queryKey: ['posts'],
		staleTime: 3_600_000,
	});
}

export function postQueryOptions(
	urlHandle: string,
): UseQueryOptions<BlogPostData, Error, BlogPostData, string[]> {
	return queryOptions({
		queryFn: () => getPost(urlHandle),
		queryKey: ['posts', urlHandle],
		staleTime: 3_600_000,
	});
}

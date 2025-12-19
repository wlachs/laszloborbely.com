import { InfiniteData, infiniteQueryOptions, queryOptions, UseInfiniteQueryOptions, UseQueryOptions } from '@tanstack/react-query';

import { getPost, getPosts } from './queries';
import { BlogPostData, BlogPostResponseData } from './types/blog';

export function postsQueryOptions(): UseInfiniteQueryOptions<
	BlogPostResponseData,
	Error,
	InfiniteData<BlogPostResponseData>,
	string[],
	number
> {
	return infiniteQueryOptions({
		queryFn: ({ pageParam }) => getPosts(pageParam),
		initialPageParam: 1,
		getNextPageParam(lastPage, _allPages, lastPageParam) {
			if (lastPageParam === lastPage.pages) {
				return undefined;
			}
			return lastPageParam + 1;
		},
		queryKey: ['posts'],
		staleTime: 3_600_000,
	});
}

export function postQueryOptions(urlHandle: string): UseQueryOptions<BlogPostData, Error, BlogPostData, string[]> {
	return queryOptions({
		queryFn: () => getPost(urlHandle),
		queryKey: ['posts', urlHandle],
		staleTime: 3_600_000,
	});
}

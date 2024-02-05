import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getPost, getPosts } from './queries';
import { BlogPostData } from './types/blog';

export function useGetPosts(): UseQueryResult<BlogPostData[]> {
	return useQuery({
		queryFn: getPosts,
		queryKey: ['posts'],
		staleTime: 3_600_000,
	});
}

export function useGetPost(urlHandle: string): UseQueryResult<BlogPostData> {
	return useQuery({
		queryFn: () => getPost(urlHandle),
		queryKey: [`posts/${urlHandle}`],
		staleTime: 3_600_000,
	});
}

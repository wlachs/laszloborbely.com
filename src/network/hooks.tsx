import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getPosts } from './queries';
import { BlogPostData } from './types/blog';

export function useGetPosts(): UseQueryResult<BlogPostData[]> {
	return useQuery({
		queryFn: getPosts,
		queryKey: ['posts'],
		staleTime: 3_600_000,
	});
}

import { Navigate, type RouteObject } from 'react-router-dom';

import queryClient from '../network';
import { getPost, getPosts } from '../network/queries.ts';
import Blog from './Blog.tsx';
import BlogPost from './BlogPost.tsx';
import Contact from './Contact.jsx';
import NotFound from './NotFound.tsx';

export type RouteProps = {
	display: boolean;
	name: string;
	path: string;
} & RouteObject;

export const routes: RouteProps[] = [
	{
		id: '-1',
		display: false,
		name: '404',
		path: '/not-found',
		element: <NotFound />,
	},
	{
		id: '0',
		display: true,
		name: 'Blog',
		path: '/blog',
		element: <Blog />,
		async loader() {
			return queryClient.fetchQuery({
				queryKey: ['posts'],
				queryFn: getPosts(),
				staleTime: 3_600_000,
			});
		},
	},
	{
		id: '1',
		display: false,
		name: 'Blog',
		path: '/blog/:postId',
		element: <BlogPost />,
		async loader({ params }) {
			return queryClient.fetchQuery({
				queryKey: [`posts/${params.postId}`],
				queryFn: getPost(params.postId ?? ''),
				staleTime: 3_600_000,
			});
		},
	},
	{
		id: '2',
		display: true,
		name: 'Contact',
		path: '/contact',
		element: <Contact />,
	},
	{
		id: '3',
		display: false,
		name: '',
		path: '*',
		element: <Navigate to='/blog' />,
	},
];

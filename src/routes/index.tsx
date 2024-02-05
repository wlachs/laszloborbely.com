import { Navigate, type RouteObject } from 'react-router-dom';

import { queryClient } from '../network';
import { getPost } from '../network/queries';
import { Blog } from './Blog';
import { BlogPost } from './BlogPost';
import { Contact } from './Contact';
import { NotFound } from './NotFound';

export type RouteProps = {
	display: boolean;
	name: string;
	path: string;
} & RouteObject;

export const routes: RouteProps[] = [
	{
		display: false,
		element: <NotFound />,
		id: '-1',
		name: '404',
		path: '/not-found',
	},
	{
		display: true,
		element: <Blog />,
		id: '0',
		name: 'Blog',
		path: '/blog',
	},
	{
		display: false,
		element: <BlogPost />,
		id: '1',
		async loader({ params }) {
			return queryClient.fetchQuery({
				queryFn: getPost(params.postId ?? ''),
				queryKey: [`posts/${params.postId}`],
				staleTime: 3_600_000,
			});
		},
		name: 'Blog',
		path: '/blog/:postId',
	},
	{
		display: true,
		element: <Contact />,
		id: '2',
		name: 'Contact',
		path: '/contact',
	},
	{
		display: false,
		element: <Navigate to='/blog' />,
		id: '3',
		name: '',
		path: '*',
	},
];

import React from 'react';
import {Navigate, type RouteObject} from 'react-router-dom';
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
		element: <NotFound/>,
	},
	{
		id: '0',
		display: true,
		name: 'Blog',
		path: '/blog',
		element: <Blog/>,
		async loader() {
			try {
				return await fetch('/api/blog/posts');
			} catch (ignored) {
				return [];
			}
		},
	},
	{
		id: '1',
		display: false,
		name: 'Blog',
		path: '/blog/:postId',
		element: <BlogPost/>,
		async loader(args) {
			return fetch(`/api/blog/posts/${args.params.postId ?? ''}`);
		},
	},
	{
		id: '2',
		display: true,
		name: 'Contact',
		path: '/contact',
		element: <Contact/>,
	},
	{
		id: '3',
		display: false,
		name: '',
		path: '*',
		element: <Navigate to='/blog'/>,
	},
];

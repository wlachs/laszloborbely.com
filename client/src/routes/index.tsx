import React from 'react';
import Contact from './Contact.jsx';
import NotFound from './NotFound.tsx';
import Blog from './Blog.tsx';
import {type RouteObject} from 'react-router-dom';
import BlogPost from './BlogPost.tsx';

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
		display: false,
		name: 'Blog',
		path: '/',
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
];

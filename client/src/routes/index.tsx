import React from 'react';
import Contact from './Contact.jsx';
import Welcome from './Welcome.jsx';
import NotFound from './NotFound.tsx';
import Blog from './Blog.tsx';
import {type RouteObject} from 'react-router-dom';

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
		name: 'Welcome',
		path: '/',
		element: <Welcome/>,
	},
	{
		id: '1',
		display: true,
		name: 'Contact',
		path: '/contact',
		element: <Contact/>,
	},
	{
		id: '2',
		display: true,
		name: 'Blog',
		path: '/blog',
		element: <Blog/>,
		async loader() {
			return fetch('/api/blog/posts');
		},
	},
];

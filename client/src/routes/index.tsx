import type React from 'react';
import Contact from './Contact.jsx';
import Welcome from './Welcome.jsx';
import NotFound from './NotFound.tsx';
import Blog from './Blog.tsx';

export type RouteProps = {
	id: number;
	display: boolean;
	name: string;
	path: string;
	View: () => React.JSX.Element;
};

export const routes: RouteProps[] = [
	{
		id: -1,
		display: false,
		name: '404',
		path: '/not-found',
		View: NotFound,
	},
	{
		id: 0,
		display: true,
		name: 'Contact',
		path: '/contact',
		View: Contact,
	},
	{
		id: 2,
		display: false,
		name: 'Welcome',
		path: '/',
		View: Welcome,
	},
	{
		id: 3,
		display: true,
		name: 'Blog',
		path: '/blog',
		View: Blog,
	},
];

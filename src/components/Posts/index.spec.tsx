import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import { type BlogPostData } from '../../network/types/blog.ts';
import Posts from './index.tsx';

const post: BlogPostData = {
	urlHandle: 'test-post',
	title: 'very very long test post',
	author: 'me myself and I',
	summary: 'a summery summary',
	body: 'body with a six-pack of beer',
	creationTime: new Date(0),
};

describe('Posts component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const { container } = render(
			<MemoryRouter>
				<Posts posts={[post]} />,
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should display post metadata', () => {
		render(
			<MemoryRouter>
				<Posts posts={[post]} />,
			</MemoryRouter>,
		);
		expect(screen.getByText(post.title)).toBeDefined();
		expect(screen.getByText(post.summary)).toBeDefined();
	});

	it('should display message if there are no posts', () => {
		render(
			<MemoryRouter>
				<Posts posts={[]} />,
			</MemoryRouter>,
		);
		expect(
			screen.getByText('No posts found, come back later!'),
		).toBeDefined();
	});
});

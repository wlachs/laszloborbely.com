import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import { type BlogPostData } from '../../network/types/blog';
import { Posts } from './';

const post: BlogPostData = {
	author: 'me myself and I',
	body: 'body with a six-pack of beer',
	creationTime: new Date(0),
	id: 'test-post',
	summary: 'a summery summary',
	title: 'very very long test post',
};

describe('Posts component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const { container } = render(
			<MemoryRouter>
				<Posts data={[post]} />,
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should display post metadata', () => {
		render(
			<MemoryRouter>
				<Posts data={[post]} />,
			</MemoryRouter>,
		);
		expect(screen.getByText(post.title)).toBeDefined();
		expect(screen.getByText(post.summary)).toBeDefined();
	});

	it('should display message if there are no posts', () => {
		render(
			<MemoryRouter>
				<Posts data={[]} />,
			</MemoryRouter>,
		);
		expect(
			screen.getByText('No posts found, come back later!'),
		).toBeDefined();
	});
});

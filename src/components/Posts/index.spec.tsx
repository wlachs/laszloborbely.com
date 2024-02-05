import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import { type BlogPostData } from '../../network/types/blog';
import { Posts } from './';

const post: BlogPostData = {
	author: 'me myself and I',
	body: 'body with a six-pack of beer',
	creationTime: new Date(0),
	summary: 'a summery summary',
	title: 'very very long test post',
	urlHandle: 'test-post',
};

describe('Posts component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const { container } = render(
			<MemoryRouter>
				<Posts data={[post]} isLoading={false} />,
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should display post metadata', () => {
		render(
			<MemoryRouter>
				<Posts data={[post]} isLoading={false} />,
			</MemoryRouter>,
		);
		expect(screen.getByText(post.title)).toBeDefined();
		expect(screen.getByText(post.summary)).toBeDefined();
	});

	it('should display message if there are no posts', () => {
		render(
			<MemoryRouter>
				<Posts data={[]} isLoading={false} />,
			</MemoryRouter>,
		);
		expect(
			screen.getByText('No posts found, come back later!'),
		).toBeDefined();
	});

	it('should display loading spinner if posts are not yet loaded', () => {
		render(
			<MemoryRouter>
				<Posts isLoading={true} />,
			</MemoryRouter>,
		);
		expect(screen.getByRole('status')).toBeDefined();
	});
});

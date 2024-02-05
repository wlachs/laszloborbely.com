import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import { type BlogPostData } from '../../network/types/blog.ts';
import PostMetadata from './index.tsx';

const post: BlogPostData = {
	author: 'me myself and I',
	body: 'body with a six-pack of beer',
	creationTime: new Date(0),
	summary: 'a summery summary',
	title: 'very very long test post',
	urlHandle: 'test-post',
};

describe('PostMetadata component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const { container } = render(
			<MemoryRouter>
				<PostMetadata post={post} />,
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});
});

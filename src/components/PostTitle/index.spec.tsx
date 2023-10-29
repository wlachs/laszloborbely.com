import {cleanup, render, screen} from '@testing-library/react';
import {afterEach, describe, expect, it} from 'vitest';
import {type BlogPostData} from '../../network/types/blog.ts';
import PostTitle from './index.tsx';

const post: BlogPostData = {
	urlHandle: 'test-post',
	title: 'very very long test post',
	author: 'me myself and I',
	summary: 'a summery summary',
	body: 'body with a six-pack of beer',
	creationTime: new Date(0),
};

describe('PostTitle component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const {container} = render(
			<PostTitle post={post}/>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should display post title', () => {
		render(
			<PostTitle post={post}/>,
		);
		expect(screen.getByText(post.title)).toBeDefined();
	});
});

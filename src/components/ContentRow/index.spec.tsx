import {cleanup, render, screen} from '@testing-library/react';
import {afterEach, describe, expect, it} from 'vitest';
import ContentRow from './index.tsx';

describe('ContentRow component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should always render child elements', () => {
		const child = 'child';
		const {container} = render(<ContentRow>{child}</ContentRow>);
		expect(screen.getByText(child)).toBeDefined();
		expect(container).toMatchSnapshot();
	});

	it('should align left', () => {
		const {container} = render(<ContentRow/>);
		expect(container.children[0].className).not.toContain('justify-content-center');
		expect(container).toMatchSnapshot();
	});

	it('should align center', () => {
		const {container} = render(<ContentRow center/>);
		expect(container.children[0].className).toContain('justify-content-center');
		expect(container).toMatchSnapshot();
	});
});

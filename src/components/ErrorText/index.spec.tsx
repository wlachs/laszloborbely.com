import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { ErrorText } from './';

describe('ErrorText component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should always render child elements', () => {
		const child = 'child';
		const { container } = render(<ErrorText>{child}</ErrorText>);
		expect(screen.getByText(child)).toBeDefined();
		expect(container).toMatchSnapshot();
	});

	it('should align left', () => {
		const child = 'child';
		const { container } = render(<ErrorText>{child}</ErrorText>);
		expect(container.children[0].className).not.toContain('text-center');
		expect(container).toMatchSnapshot();
	});

	it('should align center', () => {
		const child = 'child';
		const { container } = render(<ErrorText center>{child}</ErrorText>);
		expect(container.children[0].className).toContain('text-center');
		expect(container).toMatchSnapshot();
	});
});

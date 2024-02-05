import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Content } from './';

describe('Content component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should always render child elements', () => {
		const child = 'child';
		const { container } = render(<Content>{child}</Content>);
		expect(screen.getByText(child)).toBeDefined();
		expect(container).toMatchSnapshot();
	});
});

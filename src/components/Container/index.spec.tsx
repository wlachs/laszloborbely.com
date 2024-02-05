import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import Container from './index.tsx';

describe('Container component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should always render child elements', () => {
		const child = 'child';
		const { container } = render(<Container>{child}</Container>);
		expect(screen.getByText(child)).toBeDefined();
		expect(container).toMatchSnapshot();
	});
});

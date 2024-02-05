import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Spinner } from './';

describe('Spinner component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should render spinner', () => {
		const { container } = render(<Spinner />);
		expect(container).toMatchSnapshot();
	});

	it('should align center', () => {
		const { container } = render(<Spinner />);
		expect(container.children[0].className).toContain(
			'd-flex justify-content-center',
		);
	});

	it('should have status role', () => {
		render(<Spinner />);
		expect(screen.getByRole('status')).toBeDefined();
	});
});

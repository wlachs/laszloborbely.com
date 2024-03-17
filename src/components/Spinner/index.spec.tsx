import { cleanup, render } from '@testing-library/react';
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
			'flex justify-center',
		);
	});
});

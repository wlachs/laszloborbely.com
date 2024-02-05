import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import Frame from './index.tsx';

describe('Frame component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should always render child elements', () => {
		const child = 'child';
		const { container } = render(
			<MemoryRouter>
				<Frame>{child}</Frame>,
			</MemoryRouter>,
		);
		expect(screen.getByText(child)).toBeDefined();
		expect(container).toMatchSnapshot();
	});
});

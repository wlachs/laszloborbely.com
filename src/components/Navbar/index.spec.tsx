import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Navbar } from './';

const mocked = vi.hoisted(() => ({
	component: () => <div />,
}));

vi.mock('../Links', () => ({
	Links: mocked.component,
}));

vi.mock('../PureLinkHighlight', () => ({
	PureLinkHighlight: mocked.component,
}));

describe('Navbar component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const { container } = render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});
});

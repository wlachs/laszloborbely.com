import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Navbar from './index.tsx';

const mocked = vi.hoisted(() => ({
	component: () => ({
		default: () => <div />,
	}),
}));

vi.mock('../Links', mocked.component);
vi.mock('../PureLinkHighlight', mocked.component);

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

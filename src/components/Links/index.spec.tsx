import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Links } from './';

vi.mock('../../routes', () => ({
	routes: [
		{
			display: true,
			element: <div />,
			id: '2',
			name: 'Route #2',
			path: '/2',
		},
		{
			display: false,
			element: <div />,
			id: '1',
			name: 'Route #1',
			path: '/hidden',
		},
		{
			display: true,
			element: <div />,
			id: '3',
			name: 'Route #3',
			path: '/3',
		},
		{
			display: true,
			element: <div />,
			id: '0',
			name: 'Route #0',
			path: '/0',
		},
	],
}));

describe('Links component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const { container } = render(
			<MemoryRouter>
				<Links />
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should only show routes with display property', () => {
		const { container } = render(
			<MemoryRouter>
				<Links />
			</MemoryRouter>,
		);
		expect(screen.queryByText('Route #1')).toBeNull();
		expect(container.children.length).toEqual(3);
	});

	it('should sort routes by ID', async () => {
		render(
			<MemoryRouter>
				<Links />
			</MemoryRouter>,
		);
		const res = screen.getAllByText(/Route #[0-9]/);
		const labels = res.map(r => r.innerHTML);
		expect(labels).toEqual(['Route #3', 'Route #2', 'Route #0']);
	});
});

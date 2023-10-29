import {cleanup, render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {afterEach, describe, expect, it, vi} from 'vitest';
import Links from './index.tsx';

vi.mock('../../routes', () => ({
	routes: [
		{
			id: '2',
			display: true,
			name: 'Route #2',
			path: '/2',
			element: <div/>,
		},
		{
			id: '1',
			display: false,
			name: 'Route #1',
			path: '/hidden',
			element: <div/>,
		},
		{
			id: '3',
			display: true,
			name: 'Route #3',
			path: '/3',
			element: <div/>,
		},
		{
			id: '0',
			display: true,
			name: 'Route #0',
			path: '/0',
			element: <div/>,
		},
	],
}));

describe('Links component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const {container} = render(
			<MemoryRouter>
				<Links/>
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should only show routes with display property', () => {
		const {container} = render(
			<MemoryRouter>
				<Links/>
			</MemoryRouter>,
		);
		expect(screen.queryByText('Route #1')).toBeNull();
		expect(container.children.length).toEqual(3);
	});

	it('should sort routes by ID', async () => {
		const {container} = render(
			<MemoryRouter>
				<Links/>
			</MemoryRouter>,
		);
		const res = screen.getAllByText(/Route #[0-9]/);
		const labels = res.map(r => r.innerHTML);
		expect(labels).toEqual(['Route #3', 'Route #2', 'Route #0']);
	});
});

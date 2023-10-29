import {cleanup, render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {afterEach, describe, expect, it} from 'vitest';
import PureLinkHighlight from './index.tsx';

describe('PureLinkHighlight component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const child = 'child';
		const {container} = render(
			<MemoryRouter>
				<PureLinkHighlight to='/'>{child}</PureLinkHighlight>,
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should highlight link if on matching route', () => {
		const child = 'child';
		const {container} = render(
			<MemoryRouter>
				<PureLinkHighlight to='/'>{child}</PureLinkHighlight>,
			</MemoryRouter>,
		);
		expect(container.querySelector('a')?.className).toContain('link_active');
	});

	it('should not highlight link on non-matching routes', () => {
		const child = 'child';
		const {container} = render(
			<MemoryRouter>
				<PureLinkHighlight to='/blog'>{child}</PureLinkHighlight>,
			</MemoryRouter>,
		);
		expect(container.querySelector('a')?.className).not.toContain('link_active');
	});
});

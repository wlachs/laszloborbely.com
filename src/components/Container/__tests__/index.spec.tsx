import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import Container from '../index.tsx';

describe('Container component', () => {
	it('should always render child elements', () => {
		const child = 'child';
		render(<Container>{child}</Container>);
		expect(screen.getByText(child)).toBeDefined();
	});

	it('should match snapshot', () => {
		const child = 'child';
		const {container} = render(<Container>{child}</Container>);
		expect(container).toMatchSnapshot();
	});
});

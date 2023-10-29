import {cleanup, render} from '@testing-library/react';
import {afterEach, describe, expect, it} from 'vitest';
import Separator from './index.tsx';

describe('Separator component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const {container} = render(<Separator/>);
		expect(container).toMatchSnapshot();
	});
});

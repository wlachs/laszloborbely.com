import {cleanup, render} from '@testing-library/react';
import {afterEach, describe, expect, it} from 'vitest';
import MarkdownRenderer from './index.tsx';

describe('MarkdownRenderer component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should highlight code syntax', () => {
		const code = '```js\nconsole.log()\n```';
		const {container} = render(
			<MarkdownRenderer content={code}/>,
		);
		expect(container.querySelector('code')).not.toBeNull();
	});
});

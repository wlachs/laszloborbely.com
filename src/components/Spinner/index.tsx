import { ReactElement } from 'react';

export function Spinner(): ReactElement {
	return (
		<div className='d-flex justify-content-center'>
			<span className='spinner-border primary-text' role='status' />
		</div>
	);
}

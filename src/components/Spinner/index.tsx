import { ReactElement } from 'react';

import spinner from '../../assets/images/spinner.svg';

export function Spinner(): ReactElement {
	return (
		<div className='flex justify-center'>
			<img src={spinner} className='w-12 animate-spin' alt='Loading...' />
		</div>
	);
}

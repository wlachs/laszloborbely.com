import { ReactElement, type ReactNode } from 'react';

export function Container(props: {
	children?: ReactElement | ReactNode | string;
}) {
	const { children } = props;
	return (
		<div className='d-flex flex-column align-items-center h-100 col-11 col-lg-12 m-auto flex-grow-1'>
			{children}
		</div>
	);
}

import { ReactElement, type ReactNode } from 'react';

interface ContainerProps {
	children?: ReactElement | ReactNode | string;
}

export function Container({ children }: ContainerProps): ReactElement {
	return (
		<div className='d-flex flex-column align-items-center h-100 col-11 col-lg-12 m-auto flex-grow-1'>
			{children}
		</div>
	);
}

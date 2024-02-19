import './index.css';

import { ReactElement, type ReactNode } from 'react';

import { Navbar } from '../Navbar';

interface FrameProps {
	children?: ReactNode;
}

export function Frame({ children }: FrameProps): ReactElement {
	return (
		<div className='container mx-auto px-4 sm:max-w-[50rem] lg:px-0'>
			<Navbar />
			{children}
		</div>
	);
}

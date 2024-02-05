import './index.css';

import { ReactElement, type ReactNode } from 'react';

import { Navbar } from '../Navbar';

interface FrameProps {
	children?: ReactNode;
}

export function Frame({ children }: FrameProps): ReactElement {
	const classes = [
		'frame-container',
		'm-0',
		'mx-auto',
		'p-0',
		'py-lg-4',
		'min-vh-100',
	].join(' ');
	return (
		<div className={classes}>
			<Navbar />
			{children}
		</div>
	);
}

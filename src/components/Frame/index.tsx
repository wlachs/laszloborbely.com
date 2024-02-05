import './index.css';

import { type ReactNode } from 'react';

import Navbar from '../Navbar/index.jsx';

function Frame(props: { children?: ReactNode }) {
	const { children } = props;
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

export default Frame;

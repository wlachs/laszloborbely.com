import {type ReactNode} from 'react';
import Navbar from '../Navbar/index.jsx';
import './index.css';

function Frame(props: {children?: ReactNode}) {
	const {children} = props;
	const classes = [
		'frame-container',
		'm-0',
		'mx-auto',
		'p-0',
		'py-lg-4',
		'min-vh-100',
		/* Responsive */
		'col-12',
		'col-md-10',
		'col-lg-8',
		'col-xl-7',
		'col-xxl-5',
	].join(' ');
	return (
		<div className={classes}>
			<Navbar/>
			{children}
		</div>
	);
}

export default Frame;

import React, {type ReactNode} from 'react';

function Content(props: {
	children?: React.JSX.Element | ReactNode | string;
}) {
	const {children} = props;
	const classes = [
		'd-flex',
		'flex-column',
		'align-items-center',
		'h-100',
		'flex-grow-1',
		'mt-5',
		/* Responsive */
		'col-12',
		'col-md-10',
		'col-lg-8',
		'col-xl-7',
		'col-xxl-5',
	].join(' ');
	return (
		<div className={classes}>
			{children}
		</div>
	);
}

export default Content;

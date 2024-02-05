import { type ReactNode } from 'react';

function Content(props: { children?: React.JSX.Element | ReactNode | string }) {
	const { children } = props;
	const classes = [
		'd-flex',
		'flex-column',
		'align-items-center',
		'h-100',
		'flex-grow-1',
		'col-12',
	].join(' ');
	return <div className={classes}>{children}</div>;
}

export default Content;

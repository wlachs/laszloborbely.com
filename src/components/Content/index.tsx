import { ReactElement, type ReactNode } from 'react';

export function Content(props: {
	children?: ReactElement | ReactNode | string;
}) {
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

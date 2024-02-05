import { ReactElement, type ReactNode } from 'react';

interface ContentProps {
	children?: ReactElement | ReactNode | string;
}

export function Content({ children }: ContentProps): ReactElement {
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

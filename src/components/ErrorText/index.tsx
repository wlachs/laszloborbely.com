import { ReactElement } from 'react';

interface ErrorTextProps {
	center?: boolean;
	children: string;
}

export function ErrorText({ center, children }: ErrorTextProps): ReactElement {
	const classes = [center && 'text-center'].filter(Boolean).join(' ');
	return <p className={classes}>{children}</p>;
}

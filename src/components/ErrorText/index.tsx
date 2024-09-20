import { ReactElement } from 'react';

interface ErrorTextProps {
	readonly center?: boolean;
	readonly children: string;
}

export function ErrorText({ center, children }: ErrorTextProps): ReactElement {
	const classes = [center && 'text-center'].filter(Boolean).join(' ');
	return <p className={classes}>{children}</p>;
}

import { ReactElement, type ReactNode } from 'react';

interface ContentRowProps {
	readonly center?: boolean;
	readonly children?: ReactNode;
}

export function ContentRow({ children, center }: ContentRowProps): ReactElement {
	const centerClasses = ['flex', 'flex-row', 'content-center', 'items-center'];
	const classes = [
		'w-full',
		...(center ? centerClasses : []),
		/* Desktop */
		'lg:mt-1',
		/* Phone */
		'mb-2',
	].join(' ');
	return (
		<div className={classes}>
			{/* Render row content */}
			{children}
		</div>
	);
}

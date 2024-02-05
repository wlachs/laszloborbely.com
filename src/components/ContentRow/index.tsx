import { ReactElement, type ReactNode } from 'react';

interface ContentRowProps {
	center?: boolean;
	children?: ReactNode;
}

export function ContentRow({
	children,
	center,
}: ContentRowProps): ReactElement {
	const centerClasses = [
		'd-flex',
		'flex-row',
		'justify-content-center',
		'align-items-center',
	];
	const classes = [
		'w-100',
		...(center ? centerClasses : []),
		/* Desktop */
		'mt-lg-1',
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

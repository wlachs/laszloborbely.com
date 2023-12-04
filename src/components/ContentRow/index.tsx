// React imports
import React, {type ReactNode} from 'react';

function ContentRow(props: {
	center?: boolean;
	children?: ReactNode;
}) {
	const {children, center} = props;
	const centerClasses = [
		'd-flex',
		'flex-row',
		'justify-content-center',
		'align-items-center',
	];
	const classes = [
		'w-100',
		...center ? centerClasses : [],
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

export default ContentRow;

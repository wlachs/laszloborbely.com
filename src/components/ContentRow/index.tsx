// React imports
import React, {type ReactNode} from 'react';

function ContentRow(props: {
	children?: ReactNode;
}) {
	const {children} = props;
	const classes = [
		'w-100',
		'd-flex',
		'flex-row',
		'justify-content-center',
		'align-items-center',
		/* Desktop */
		'mt-lg-3',
		/* Phone */
		'mb-3',
	].join(' ');
	return (
		<div className={classes}>
			{/* Render row content */}
			{children}
		</div>
	);
}

export default ContentRow;

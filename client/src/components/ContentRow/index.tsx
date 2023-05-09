// React imports
import React, {type ReactNode} from 'react';

function ContentRow(props: {
	children?: ReactNode;
}) {
	const {children} = props;
	return (
		<div className='col-12 d-flex flex-row justify-content-center align-items-center my-3'>
			{/* Render row content */}
			{children}
		</div>
	);
}

export default ContentRow;

import React, {type ReactNode} from 'react';

function Content(props: {
	children?: JSX.Element | ReactNode | string;
}) {
	const {children} = props;
	return (
		<div className='d-flex flex-column align-items-center h-100 w-100 flex-grow-1'>
			{children}
		</div>
	);
}

export default Content;

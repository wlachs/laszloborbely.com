import React, {type ReactNode} from 'react';

function Container(props: {
	children?: React.JSX.Element | ReactNode | string;
}) {
	const {children} = props;
	return (
		<div className='d-flex flex-column align-items-center h-100 w-100 flex-grow-1'>
			{children}
		</div>
	);
}

export default Container;

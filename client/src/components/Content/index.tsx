import React, {type ReactNode} from 'react';

function Content(props: {
	children?: React.JSX.Element | ReactNode | string;
}) {
	const {children} = props;
	return (
		<div className='d-flex flex-column align-items-center h-100 col-lg-8 col-12 flex-grow-1 mt-5'>
			{children}
		</div>
	);
}

export default Content;

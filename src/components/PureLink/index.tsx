import React from 'react';
import {NavLink} from 'react-router-dom';

function PureLink({to, children}: {
	to: string;
	children?: React.JSX.Element | string;
}) {
	return (
		<NavLink to={to} className='link'>
			{children}
		</NavLink>
	);
}

export default PureLink;

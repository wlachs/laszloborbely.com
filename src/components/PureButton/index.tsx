import React, {type ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

function PureButton(props: {
	to?: string;
	children?: React.JSX.Element | ReactNode | string;
	onClick?: () => void;
}) {
	const {to, children, onClick} = props;

	if (to) {
		return (
			<NavLink to={to} className='button-link link' onClick={onClick}>
				{children}
			</NavLink>
		);
	}

	return (
		<button type='button' className='button-link' onClick={onClick}>
			{children}
		</button>
	);
}

export default PureButton;

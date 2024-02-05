import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export function PureLinkHighlight(props: { to: string; children?: ReactNode }) {
	const { to, children } = props;
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? 'link link_active' : 'link'
			}>
			{children}
		</NavLink>
	);
}

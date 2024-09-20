import './index.css';

import { ReactElement, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface PureLinkHighlightProps {
	readonly to: string;
	readonly children?: ReactNode;
}

export function PureLinkHighlight({ to, children }: PureLinkHighlightProps): ReactElement {
	return (
		<NavLink to={to} className={({ isActive }) => (isActive ? 'link link_active' : 'link')}>
			{children}
		</NavLink>
	);
}

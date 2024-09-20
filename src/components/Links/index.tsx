import { Fragment, ReactElement } from 'react';

import { type RouteProps, routes } from '../../routes';
import { PureLinkHighlight } from '../PureLinkHighlight';

export function Links(): ReactElement {
	const elements = routes
		.toSorted((a, b) => Number(b.id) - Number(a.id))
		.filter((route: RouteProps) => route.display)
		.map((route: RouteProps) => (
			<PureLinkHighlight key={route.id} to={route.path}>
				{route.name}
			</PureLinkHighlight>
		));

	return <Fragment>{elements}</Fragment>;
}

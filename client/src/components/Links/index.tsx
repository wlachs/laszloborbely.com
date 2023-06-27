import React from 'react';
import PureLinkHighlight from '../PureLinkHighlight/index.jsx';
import {type RouteProps, routes} from '../../routes';

function Links() {
	const elements = routes
		.sort((a, b) => Number(b.id) - Number(a.id))
		.filter((route: RouteProps) => route.display)
		.map((Route: RouteProps) => (
			<PureLinkHighlight key={Route.id} to={Route.path}>{Route.name}</PureLinkHighlight>
		));

	return (
		<React.Fragment>
			{elements}
		</React.Fragment>
	);
}

export default Links;

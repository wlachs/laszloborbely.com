import React from 'react';
import PureLinkHighlight from '../PureLinkHighlight/index.jsx';
import {type RouteProps, routes} from '../../routes';

function Links() {
	const elements = routes
		.sort((a, b) => Number(b.id) - Number(a.id))
		.filter((route: RouteProps) => route.display)
		.map((route: RouteProps) => (
			<PureLinkHighlight key={route.id} to={route.path}>{route.name}</PureLinkHighlight>
		));

	return (
		<React.Fragment>
			{elements}
		</React.Fragment>
	);
}

export default Links;

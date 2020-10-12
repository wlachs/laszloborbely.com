import * as React from 'react';
import routes from '../../routes/index';
import PureLinkHighlight from '../PureLinkHighlight';

function Links() {
  return routes.filter((route) => route.display).map((Route) => (
    <PureLinkHighlight key={Route.id} to={Route.path}>{Route.name}</PureLinkHighlight>
  ));
}

export default Links;

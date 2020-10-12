import * as React from 'react';
import routes from './index';
import PureLinkHighlight from '../components/PureLinkHighlight';

function Links() {
  return routes.filter((route) => route.display).map((Route) => (
    <PureLinkHighlight key={Route.id} to={Route.path}>{Route.name}</PureLinkHighlight>
  ));
}

export default Links;

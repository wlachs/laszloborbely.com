import * as React from 'react';
import routes from './index';
import PureLink from '../components/PureLink';

function Links() {
  return routes.filter((route) => route.display).map((Route) => (
    <PureLink key={Route.id} to={Route.path}>{Route.name}</PureLink>
  ));
}

export default Links;

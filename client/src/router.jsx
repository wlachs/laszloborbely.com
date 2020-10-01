import React from 'react';
import { BrowserRouter, Switch, Route as ReactRoute } from 'react-router-dom';
import routes from './routes';
import Frame from './components/Frame';
import NotFound from './routes/NotFound';

function Router() {
  const routeMap = routes.map((Route) => (
    <ReactRoute key={Route.id} path={Route.path} exact>
      <Route.View />
    </ReactRoute>
  ));

  return (
    <BrowserRouter>
      <Frame>
        <Switch>
          {routeMap}
          <NotFound />
        </Switch>
      </Frame>
    </BrowserRouter>
  );
}

export default Router;

import React from 'react';
import { BrowserRouter, Switch, Route as ReactRoute } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import routes from './routes';
import Frame from './components/Frame';
import { PAGE_TITLE } from './apollo/queries/config';
import Loading from './routes/Loading';
import Error from './routes/Error';

function Router() {
  const { loading, error, data } = useQuery(PAGE_TITLE);

  let FinalRoute;
  if (error) {
    FinalRoute = () => <Error />;
  } else if (loading) {
    FinalRoute = () => <Loading />;
  } else {
    const routeMap = routes.map((Route) => (
      <ReactRoute key={Route.id} path={Route.path}>
        {Route.View}
      </ReactRoute>
    ));

    FinalRoute = () => (
      <Switch>
        {routeMap}
      </Switch>
    );
  }

  if (data) {
    document.title = data.config.pageTitle;
  }

  return (
    <BrowserRouter>
      <Frame>
        <FinalRoute />
      </Frame>
    </BrowserRouter>
  );
}

export default Router;

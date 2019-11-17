import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routes} from './routes';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(route =>
                    <Route key={route.id} path={route.path}>
                        {route.view}
                    </Route>
                )}
            </Switch>
        </BrowserRouter>
    );
};

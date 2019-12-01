import * as React from 'react';
import {BrowserRouter, Switch, Route as ReactRoute} from 'react-router-dom';
import {routes} from './routes';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(Route =>
                    <ReactRoute key={Route.id} path={Route.path}>
                        {Route.View}
                    </ReactRoute>
                )}
            </Switch>
        </BrowserRouter>
    );
};

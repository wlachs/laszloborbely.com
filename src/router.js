import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Welcome from "./routes/Welcome";

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/contact">
                    <Contact {...props} />
                </Route>
                <Route path="/projects">
                    <Projects {...props} />
                </Route>
                <Route path="/">
                    <Welcome {...props} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

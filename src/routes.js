import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";

import withTracker from './components/misc/WithTracker';
import { Page404 } from "./components/misc/Page404";

// Pages
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Industries from './components/pages/Industries';
import Products from './components/pages/Products';
import Resources from './components/pages/Resources';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/products" component={withTracker(Products)} />
                <Route exact path="/industries" component={withTracker(Industries)} />
                <Route exact path="/about-us" component={withTracker(AboutUs)} />
                <Route exact path="/resources" component={withTracker(Resources)} />
                <Route component={withTracker(Page404)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);
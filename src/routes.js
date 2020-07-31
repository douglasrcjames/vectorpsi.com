import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";

import withTracker from './components/misc/WithTracker';
import { Page404 } from "./components/misc/Page404";

// Pages
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Industries from './components/pages/Industries';
import Products from './components/pages/products/Products';
import Resources from './components/pages/Resources';
import ControlValves from './components/pages/products/ControlValves';
import Isolation from './components/pages/products/Isolation';
import Flow from './components/pages/products/Flow';
import Level from './components/pages/products/Level';
import Pressure from './components/pages/products/Pressure';
import Temperature from './components/pages/products/Temperature';
import Automation from './components/pages/products/Automation';
import Filtration from './components/pages/products/Filtration';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/products" component={withTracker(Products)} />
                <Route exact path="/products/control-valves" component={withTracker(ControlValves)} />
                <Route exact path="/products/isolation" component={withTracker(Isolation)} />
                <Route exact path="/products/flow" component={withTracker(Flow)} />
                <Route exact path="/products/level" component={withTracker(Level)} />
                <Route exact path="/products/pressure" component={withTracker(Pressure)} />
                <Route exact path="/products/temperature" component={withTracker(Temperature)} />
                <Route exact path="/products/automation" component={withTracker(Automation)} />
                <Route exact path="/products/filtration" component={withTracker(Filtration)} />
                <Route exact path="/industries" component={withTracker(Industries)} />
                <Route exact path="/about-us" component={withTracker(AboutUs)} />
                <Route exact path="/resources" component={withTracker(Resources)} />
                <Route component={withTracker(Page404)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);
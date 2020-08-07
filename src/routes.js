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

import Category from './components/pages/products/Category';
import Product from './components/pages/products/Product';
import { categories, products, controlValves, isolation, flow, level, pressure, temperature, automation, filtration } from './utils/constants'

class Routes extends Component {
    whichCategory(name){
        if(name === "Control Valves"){
            return controlValves
        } else if(name === "Isolation"){
            return isolation
        } else if(name === "Flow"){
            return flow
        } else if(name === "Level"){
            return level
        } else if(name === "Pressure"){
            return pressure
        } else if(name === "Temperature"){
            return temperature
        } else if(name === "Automation"){
            return automation
        } else if(name === "Filtration"){
            return filtration
        }
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/products" component={withTracker(Products)} />
                {  
                    categories.map((category, i) => {
                        return (<Route key={i} exact path={`/products/${category.name.split(" ").join("-").toLowerCase()}`} component={() => <Category name={category.name} categoryArray={this.whichCategory(category.name)} />} />)
                    })  
                } 
                {  
                    products.map((product, i) => {
                        return (
                            <Route 
                                key={i} 
                                exact path={`/products/${product.category.split(" ").join("-").toLowerCase()}/${product.name.split(" ").join("-").toLowerCase()}`} 
                                component={() => 
                                    <Product 
                                        name={product.name} 
                                        description={product.description} 
                                        category={product.category} 
                                        link={product.link}
                                        picPath={product.picPath} />
                                    } 
                                />
                        )
                    })  
                } 

                <Route exact path="/industries" component={withTracker(Industries)} />
                <Route exact path="/about-us" component={withTracker(AboutUs)} />
                <Route exact path="/resources" component={withTracker(Resources)} />
                <Route component={withTracker(Page404)} />
            </Switch>
        )
    }
}



export default withRouter(Routes);
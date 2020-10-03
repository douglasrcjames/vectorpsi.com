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
import { 
    categories, 
    allProducts, 
    controlProducts, 
    isolationProducts, 
    flowProducts, 
    levelProducts, 
    instrumentationProducts, 
    automationProducts, 
    filtrationProducts, 
    pipingSystemsProducts, 
    tanksPumpsProducts, 
    systemAccessoriesProducts,
    // Sub companies
    controlSubCompanies, 
    isolationSubCompanies, 
    flowSubCompanies, 
    levelSubCompanies, 
    instrumentationSubCompanies, 
    automationSubCompanies, 
    filtrationSubCompanies, 
    pipingSystemsSubCompanies, 
    tanksPumpsSubCompanies, 
    systemAccessoriesSubCompanies
 } from './utils/constants'

class Routes extends Component {
    whichCategory4Products(name){
        if(name === "Control"){
            return controlProducts
        } else if(name === "Isolation"){
            return isolationProducts
        } else if(name === "Flow"){
            return flowProducts
        } else if(name === "Level"){
            return levelProducts
        } else if(name === "Instrumentation"){
            return instrumentationProducts
        } else if(name === "Automation"){
            return automationProducts
        } else if(name === "Filtration"){
            return filtrationProducts
        } else if(name === "Piping Systems"){
            return pipingSystemsProducts
        } else if(name === "Tanks & Pumps"){
            return tanksPumpsProducts
        } else if(name === "System Accessories"){
            return systemAccessoriesProducts
        } 
    }
    

    whichCategory4SubCompanies(name){
        if(name === "Control"){
            return controlSubCompanies
        } else if(name === "Isolation"){
            return isolationSubCompanies
        } else if(name === "Flow"){
            return flowSubCompanies
        } else if(name === "Level"){
            return levelSubCompanies
        } else if(name === "Instrumentation"){
            return instrumentationSubCompanies
        } else if(name === "Automation"){
            return automationSubCompanies
        } else if(name === "Filtration"){
            return filtrationSubCompanies
        } else if(name === "Piping Systems"){
            return pipingSystemsSubCompanies
        } else if(name === "Tanks & Pumps"){
            return tanksPumpsSubCompanies
        } else if(name === "System Accessories"){
            return systemAccessoriesSubCompanies
        } 
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/products" component={withTracker(Products)} />
                {  
                    categories.map((category, i) => {
                        return (
                            <Route 
                                key={i} 
                                exact 
                                path={`/products/${category.name.split(" ").join("-").toLowerCase()}`} 
                                component={() => 
                                    <Category 
                                        name={category.name} 
                                        categoryArray={this.whichCategory4Products(category.name)} 
                                        subCompaniesArray={this.whichCategory4SubCompanies(category.name)} 
                                    />} 
                                />
                            )
                    })  
                } 
                {  
                    allProducts.map((product, i) => {
                        return (
                            <Route 
                                key={i} 
                                exact path={`/products/${product.category.toLowerCase()}/${product.name.split(" ").join("-").toLowerCase()}`} 
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
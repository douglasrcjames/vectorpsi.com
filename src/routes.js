import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import withTracker from './components/misc/WithTracker';
import { Page404 } from "./components/misc/Page404";

// Pages
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Industries from './components/pages/Industries';
import ProductCategories from './components/pages/products/ProductCategories';
import Resources from './components/pages/Resources';

import Category from './components/pages/products/Category';
import ProductLine from './components/pages/products/ProductLine';
import { 
    categories, 
    allProductLines, 
    controlProductLines, 
    isolationProductLines, 
    flowProductLines, 
    levelProductLines, 
    instrumentationProductLines, 
    automationProductLines, 
    filtrationProductLines, 
    pipingSystemsProductLines, 
    tanksPumpsProductLines, 
    systemAccessoriesProductLines,
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
            return controlProductLines
        } else if(name === "Isolation"){
            return isolationProductLines
        } else if(name === "Flow"){
            return flowProductLines
        } else if(name === "Level"){
            return levelProductLines
        } else if(name === "Instrumentation"){
            return instrumentationProductLines
        } else if(name === "Automation"){
            return automationProductLines
        } else if(name === "Filtration"){
            return filtrationProductLines
        } else if(name === "Piping Systems"){
            return pipingSystemsProductLines
        } else if(name === "Tanks & Pumps"){
            return tanksPumpsProductLines
        } else if(name === "System Accessories"){
            return systemAccessoriesProductLines
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
                <Route exact path="/products" component={withTracker(ProductCategories)} />
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
                    allProductLines.map((productLine, i) => {
                        return (
                            <Route 
                                key={i} 
                                exact path={`/products/${productLine.category.split(" ").join("-").toLowerCase()}/${productLine.name.split(" ").join("-").toLowerCase()}`} 
                                component={() => 
                                    <ProductLine 
                                        name={productLine.name} 
                                        category={productLine.category} 
                                        productSets={productLine.productSets} 
                                        />
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
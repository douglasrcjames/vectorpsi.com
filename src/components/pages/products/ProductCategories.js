import React, { Component } from 'react'
import Categories from './Categories'
import { Helmet } from 'react-helmet-async'

export default class ProductsCategories extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Products | Vector PSI</title>
                </Helmet>
                <h1>Product Categories</h1>
                <Categories />
            </div>
        )
    }
}



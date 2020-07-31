import React, { Component } from 'react'
import ProductsView from './ProductsView'

export default class Products extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Products</h1>
                <p>
                    Each category will open up a more detailed second page.
                </p>
                <ProductsView />
            </div>
        )
    }
}



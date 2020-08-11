import React, { Component } from 'react'
import Categories from './Categories'
import { Helmet } from 'react-helmet'

export default class Products extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Products | Vector PSI</title>
                </Helmet>
                <h1>Products</h1>
                <Categories />
            </div>
        )
    }
}



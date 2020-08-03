import React, { Component } from 'react'
import Categories from './Categories'

export default class Products extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Products</h1>
                <Categories />
            </div>
        )
    }
}



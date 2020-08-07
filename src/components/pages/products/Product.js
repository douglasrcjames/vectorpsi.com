import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>{this.props.name}</h1>
                <Link to={`/products/${this.props.category.split(" ").join("-").toLowerCase()}`}>
                    <button className="custom-btn btn-15"><i className="fas fa-arrow-left"/> Back to {this.props.category} products </button>
                </Link>
                <p className="pre-wrap">{this.props.description}</p>
                <div className="center-text">
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button className="custom-btn btn-11">Go to manufacturers site</button></a>
                    <br/>
                    <img src={this.props.picPath} alt="product" className="large responsive" />
                </div>
                
            </div>
        )
    }
}

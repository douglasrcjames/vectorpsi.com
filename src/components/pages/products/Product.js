import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <div className="center-text">
                    <button className="custom-btn btn-11">Go to manufacturers site</button>
                    <br/>
                    <img src={this.props.picPath} alt="product" className="large responsive" />
                </div>
                
            </div>
        )
    }
}

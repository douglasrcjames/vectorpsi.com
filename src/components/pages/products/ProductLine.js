import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Col, Grid, Row } from 'react-flexbox-grid'

export default class ProductLine extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Products - {this.props.name} | Vector PSI</title>
                </Helmet>
                <Link to={`/products/${this.props.category.split(" ").join("-").toLowerCase()}`}>
                    <button className="custom-btn btn-15"><i className="fas fa-arrow-left"/> Back to {this.props.category} products </button>
                </Link>
                <h1 className="s-margin-t-b">{this.props.name}</h1>
                {  
                    this.props.productSets.map((product, i) => {
                        return (
                            <div>
                                {product.subheader && ( 
                                    <h2>{product.subheader}</h2>
                                )}
                                <p>{product.description}</p>
                                <div className="center-text">
                                    <a href={product.link} target="_blank" rel="noopener noreferrer"><button className="custom-btn btn-11">Go to manufacturer's site</button></a>
                                </div>
                                {/* TODO: remove this condition when all filled in */}
                                {product.picPaths && (
                                    <Grid fluid>
                                        <Row>
                                            {product.picPaths.map((picPath, index) => (
                                                <Col sm={12} md={6} lg={3} className="center-text" key={index}>
                                                    <img src={picPath} alt="product" className="large-fit responsive" />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Grid>
                                )}
                            </div>
                        )
                    })  
                } 
            </div>
        )
    }
}

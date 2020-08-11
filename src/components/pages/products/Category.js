import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default class Category extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Products - {this.props.name} | Vector PSI</title>
                </Helmet>
                <h1>{this.props.name}</h1>
                <Link to={`/products/`}>
                    <button className="custom-btn btn-15"><i className="fas fa-arrow-left"/> Back to all products</button>
                </Link>
                <Grid fluid>
                    {this.props.categoryArray.map((product, index) => (
                        <Row className="m-margin-t-b" key={index}>
                            <Col sm={12} md={4} lg={2} className="center-text">
                                <img src={product.picPath} alt="product" className="large responsive" />
                            </Col>
                            
                            <Col sm={12} md={8} lg={10} >
                                <Row start="xs" className="s-margin-l">
                                    <Col>
                                        <h2>{product.name}</h2>
                                        <p>
                                            {product.description}
                                        </p>
                                        <div className="center-text">
                                            <Link to={`/products/${this.props.name.split(" ").join("-").toLowerCase()}/${product.name.split(" ").join("-").toLowerCase()}`}>
                                                <button className="custom-btn btn-11">Learn more</button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ))}
                </Grid>
            </div>
        )
    }
}

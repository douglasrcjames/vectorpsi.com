import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default class Category extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>{this.props.name} Products | Vector PSI</title>
                </Helmet>
                <Link to={`/products/`}>
                    <button className="custom-btn btn-15"><i className="fas fa-arrow-left"/> Back to all products</button>
                </Link>
                <h1 className="s-margin-t-b">{this.props.name} Products</h1>
                <Grid fluid>
                    {this.props.categoryArray.map((product, index) => (
                        <Row className="m-margin-t-b" key={index}>
                            <Col sm={12} md={4} lg={2} className="center-text">
                                <img src={product.thumbPath} alt="product" className="large-fit responsive" />
                            </Col>
                            
                            <Col sm={12} md={8} lg={10} >
                                <Row start="xs" className="s-margin-l">
                                    <Col>
                                        <h2>{product.name}</h2>
                                        <p>
                                            {product.description}
                                        </p>
                                        <div className="center-text">
                                           
                                        </div>
                                    </Col>
                                </Row>
                                <Row center="xs" className="s-margin-l">
                                    <Link to={`/products/${this.props.name.split(" ").join("-").toLowerCase()}/${product.name.split(" ").join("-").toLowerCase()}`}>
                                        <button className="custom-btn btn-11">Learn more</button>
                                    </Link>
                                </Row>
                            </Col>
                        </Row>
                    ))}
                </Grid>
                <h2 className="center-text">Product Manufacturers</h2>
                {this.props.subCompaniesArray && (
                    <Grid fluid>
                        <Row center="xs">
                            {this.props.subCompaniesArray.map((company, index) => (
                                <Col sm={12} md={4} lg={2} className="center-text" key={index}>
                                    <img src={company.picPath} alt="company" className="xmedium responsive" />
                                </Col>
                            ))}
                        </Row>
                    </Grid>
                )}
               
            </div>
        )
    }
}

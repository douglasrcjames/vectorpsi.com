import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import { categories } from '../../../utils/constants'

export default class Categories extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    {categories.map((category, index) => (
                        <Col sm={12} md={6} lg={3} className="center-text" key={index}>
                            <img src={category.picPath} alt="product type" className="medium responsive" />
                            <h2 className="no-padding s-margin-t">{category.name}</h2>
                            <Link to={`/products/${category.name.split(" ").join("-").toLowerCase()}`}>
                                <button className="custom-btn btn-11">View products</button>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Grid>
        )
    }
}



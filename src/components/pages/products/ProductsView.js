import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

export default class ProductsView extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    {productTypes.map((productType, index) => (
                        <Col sm={12} md={6} lg={4} className="center-text" key={index}>
                            <img src={productType.thumbPath} alt="product type" className="small responsive" />
                            <h2 className="no-padding s-margin-t">{productType.name}</h2>
                            <Link to={`${productType.name.split(" ").join("-").toLowerCase()}`}>
                                <button className="custom-btn btn-11">View products</button>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Grid>
        )
    }
}


const productTypes = [
    {
        name: 'Control Valves',
        thumbPath: require("../../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png"),
        picSize: "small"
    },
    {
        name: 'Isolation',
        thumbPath: require("../../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png"),
        picSize: "small"
    },
    {
        name: 'Flow',
        thumbPath: require("../../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png"),
        picSize: "small"
    },
    {
        name: 'Level',
        thumbPath: require("../../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png"),
        picSize: "small"
    },
    {
        name: 'Pressure',
        thumbPath: require("../../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png"),
        picSize: "small"
    },
    {
        name: 'Temperature',
        thumbPath: require("../../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png"),
        picSize: "small"
    },
    {
        name: 'Automation',
        thumbPath: require("../../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png"),
        picSize: "small"
    },
    {
        name: 'Filtration',
        thumbPath: require("../../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png"),
        picSize: "small"
    },
]
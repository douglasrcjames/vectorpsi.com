import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

export default class Products extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Products</h1>
                <p>
                    Each category will open up a more detailed second page.
                </p>
                <Grid fluid>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="flex-center">
                            <img src={require("../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png")} alt="product" className="small responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2>Control Valves</h2>
                                    {/* <p>
                                        Ut ad culpa cupidatat tempor ut aliquip dolore aliqua laboris. Proident ex excepteur velit do eu incididunt eu cupidatat. Voluptate ut laboris magna dolor mollit ut esse laborum consectetur. 
                                        Excepteur consequat ea qui aute ullamco duis adipisicing culpa ex esse commodo Lorem elit. Proident laboris et mollit laboris quis cupidatat excepteur aliqua dolor eiusmod eu ad. 
                                    </p> */}
                                    <p>
                                        o Research Control Valve - Research Control Valves
                                        o Actival HVAC Valve, Sensor, Flowmeter - High Performance Control Valve, Sensor and
                                        Flow Meter
                                        o Warren Industrial Control Valves -
                                        http://www.warrencontrols.com/products/type/2/industrial_control_valve
                                        o Warren Commercial HVAC/BAC Control Valves -
                                        http://www.warrencontrols.com/products/type/4/commercial_hvac_bac
                                    </p>
                                    <div className="center-text">
                                        <Link to="/products/control-valves">
                                            <button class="custom-btn btn-11">View products</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="flex-center">
                            <img src={require("../../assets/images/products/Orbit-Low E_Isometric.png")} alt="product" className="small responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2>Isolation</h2>
                                    {/* <p>
                                        Cillum mollit dolor ad aliquip quis do cillum id. Excepteur aliquip fugiat sit voluptate nisi magna sunt nostrud et qui ut. 
                                        Enim cillum enim anim anim nulla et esse eu deserunt exercitation culpa proident. Consectetur minim sit esse ut aute mollit 
                                        dolore dolor. Lorem qui ipsum deserunt cillum. Dolor consectetur fugiat velit consequat mollit minim ea. 
                                    </p> */}
                                    <p>
                                        o Orbit Rising stem ball valve - https://www.energyproducts.us/orbit-ball-
                                        valve?_vsrefdom=adwords&amp;gclid=CjwKCAjw0_T4BRBlEiwAwoEiAWq_Zpkii1PKU4D1igxSn-
                                        qq7N0so8C70dWUSSlobvhtr-mNi-zjNBoC3OYQAvD_BwE
                                        o WKM Pow-R-Seal Expanding Gate - https://www.energyproducts.us/expanding-
                                        mainline-gate-valve
                                        o General Twin Seal Double Block &amp; Bleed - https://www.energyproducts.us/double-
                                        block-and-bleed-valve
                                    </p>
                                    <div className="center-text">
                                        <Link to="/products/isometric">
                                            <button class="custom-btn btn-11">View products</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="flex-center">
                            <img src={require("../../assets/images/products/unknown-valve.png")} alt="product" className="small responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2>Flow</h2>
                                    {/* <p>
                                        Cillum mollit dolor ad aliquip quis do cillum id. Excepteur aliquip fugiat sit voluptate nisi magna sunt nostrud et qui ut. 
                                        Enim cillum enim anim anim nulla et esse eu deserunt exercitation culpa proident. Consectetur minim sit esse ut aute mollit 
                                        dolore dolor. Lorem qui ipsum deserunt cillum. 
                                    </p> */}
                                    <p>
                                        o Multivariable Inline Vortex
                                        o Insertion Vortex
                                        o MagneW Two Wire Mag Meter
                                        o MagneW 3000 PLUS Sanitary Mag Meter
                                        o Blancett Turbine Flow meters
                                        o RCT1000 Coriolis Meter
                                        o Dynasonics Ultrasonic meters
                                        o Hedland variable area meters
                                    </p>
                                    <div className="center-text">
                                        <Link to="/products/flow">
                                            <button class="custom-btn btn-11">View products</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="flex-center">
                            <img src={require("../../assets/images/products/Orbit-Low E_Isometric.png")} alt="product" className="small responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2>Level</h2>
                                    {/* <p>
                                        Cillum mollit dolor ad aliquip quis do cillum id. Excepteur aliquip fugiat sit voluptate nisi magna sunt nostrud et qui ut. 
                                        Enim cillum enim anim anim nulla et esse eu deserunt exercitation culpa proident. Consectetur minim sit esse ut aute mollit 
                                        dolore dolor. Lorem qui ipsum deserunt cillum. 
                                    </p> */}
                                    <p>
                                        o Water Columns
                                        o Mag Gauge
                                        o Ported Steam Gauge
                                        o Glass Gauge
                                        o Guided Wave Radar
                                        o Flange Mount dp transmitter
                                        o Remote Seals
                                    </p>
                                    <div className="center-text">
                                        <Link to="/products/level">
                                            <button class="custom-btn btn-11">View products</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="flex-center">
                            <img src={require("../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png")} alt="product" className="small responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2>Pressure</h2>
                                    {/* <p>
                                        Cillum mollit dolor ad aliquip quis do cillum id. Excepteur aliquip fugiat sit voluptate nisi magna sunt nostrud et qui ut. 
                                        Enim cillum enim anim anim nulla et esse eu deserunt exercitation culpa proident. Consectetur minim sit esse ut aute mollit 
                                        dolore dolor. Lorem qui ipsum deserunt cillum. 
                                    </p> */}
                                    <p>
                                        o Gauge Pressure Transmitter
                                        o Absolute Pressure Transmitter
                                        o Differential Pressure Transmitter
                                        o Direct Mount Pressure Transmitter
                                        o Remote Seals
                                    </p>
                                    <div className="center-text">
                                        <Link to="/products/pressure">
                                            <button class="custom-btn btn-11">View products</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="flex-center">
                            <img src={require("../../assets/images/products/unknown-valve.png")} alt="product" className="small responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2>Temperature</h2>
                                    <p>
                                        Cillum mollit dolor ad aliquip quis do cillum id. Excepteur aliquip fugiat sit voluptate nisi magna sunt nostrud et qui ut. 
                                        Enim cillum enim anim anim nulla et esse eu deserunt exercitation culpa proident. Consectetur minim sit esse ut aute mollit 
                                        dolore dolor. Lorem qui ipsum deserunt cillum. 
                                    </p>
                                    <p>
                                        o Temperature Transmitter
                                        o RTD’s
                                    </p>
                                    <div className="center-text">
                                        <Link to="/products/temperature">
                                            <button class="custom-btn btn-11">View products</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="flex-center">
                            <img src={require("../../assets/images/products/Orbit-Low E_Isometric.png")} alt="product" className="small responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2>Automation</h2>
                                    <p>
                                        Cillum mollit dolor ad aliquip quis do cillum id. Excepteur aliquip fugiat sit voluptate nisi magna sunt nostrud et qui ut. 
                                        Enim cillum enim anim anim nulla et esse eu deserunt exercitation culpa proident. Consectetur minim sit esse ut aute mollit 
                                        dolore dolor. Lorem qui ipsum deserunt cillum. 
                                    </p>
                                    <div className="center-text">
                                        <Link to="/products/automation">
                                            <button class="custom-btn btn-11">View products</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="flex-center">
                            <img src={require("../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png")} alt="product" className="small responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2>Filtration</h2>
                                    <p>
                                        Cillum mollit dolor ad aliquip quis do cillum id. Excepteur aliquip fugiat sit voluptate nisi magna sunt nostrud et qui ut. 
                                        Enim cillum enim anim anim nulla et esse eu deserunt exercitation culpa proident. Consectetur minim sit esse ut aute mollit 
                                        dolore dolor. Lorem qui ipsum deserunt cillum. 
                                    </p>
                                    <div className="center-text">
                                        <Link to="/products/filtration">
                                            <button class="custom-btn btn-11">View products</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>

                <h2>Pending Products</h2>
                <p>
                    Coming soon!
                </p>
            </div>
        )
    }
}

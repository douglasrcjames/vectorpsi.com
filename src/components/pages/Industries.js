import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Helmet } from 'react-helmet'

export default class Industries extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Industries | Vector PSI</title>
                </Helmet>
                <h1>Industries</h1>
                {/* <p>
                    We are proud to be serving nine industries of
                    Refining, Power Generation, Midstream O&amp;G, Chemical, Pharmaceutical, Engineering, Pulp &amp; Paper, Food &amp; Beverage, and Aerospace.
                </p> */}
                <Grid fluid>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/refining.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Refining</h2>
                                    <p>
                                        Our in-depth experience with refinery process units and turnaround schedules allows us to support the critical nature this industry. We understand the sense of urgency tied to timely hardware delivery and maintaining a safe environment for operations.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/power-generation.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Power Generation</h2>
                                    <p>
                                        Vector Process Solutions has in depth experience in combined cycle, cogeneration, biomass, concentrated solar power, and geothermal power production. We understand the unique requirements for each plant type and will work with our customers to minimize downtime.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/oil-and-gas.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Midstream Oil &amp; Gas</h2>
                                    <p>
                                        We are well versed in the complex networks of crude, finished product, and natural gas pipelines spanning our state, and understand the importance behind keeping them safe. We have the valve and actuator capabilities to keep your products flowing.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/chemical.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Chemical</h2>
                                    <p>
                                        Our understanding of the materials requirements associated with this sector is second to none. Our capabilities with fluoropolymers and exotic alloys allow us to help our customer choose the right product for each application, factoring in safety, capital cost, and total cost of ownership.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/pharma.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Pharmaceutical</h2>
                                    <p>
                                        Batch integrity. USP Class VI certifications. Steam in place and clean in place. Our products are specifically designed to hold up to the rigorous demands of this industry. Our innovative thought process will ensure we keep up with this ever changing market.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/engineering.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Engineering</h2>
                                    <p>
                                        Our team will work with yours to complete detailed, accurate specifications to ensure your projects are procured and constructed as intended.  Our own engineering capabilities combined with our deep end user relationships will streamline your design efforts and minimize last minute oversights.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/pulp-paper.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Pulp &amp; Paper</h2>
                                    <p>
                                        We understand the harsh environment these valves are exposed to, and strive to offer solutions that extend repair cycles and keep your facility up and running.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/food-and-beverage.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Food &amp; Beverage</h2>
                                    <p>
                                        Our number one goal is to provide our customers with the solutions that produce a safe, high-quality and consumable product while keeping sustainability and efficient practices in mind.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="s-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/industries/aerospace.png")} alt="product" className="xmedium responsive rounded" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Aerospace</h2>
                                    <p>
                                        The engineered products in our portfolio are well suited for the rigorous demands of the aerospace industry, be it high pressure/temperature, fast acting fail safe actions, or precision demands beyond that of typical industry.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
        )
    }
}

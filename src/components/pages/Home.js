import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive'
import Partners from '../misc/Partners';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        var HeroVideo = `https://firebasestorage.googleapis.com/v0/b/vectorpsi-com.appspot.com/o/site%2Fslowed-pipes-video.mp4?alt=media&token=1b7e4bad-becb-4b36-906d-55284e6941b4`;
        return (
            <>
            <MediaQuery minWidth={901}>
                <div className="bg-media-container">
                    <video 
                        autoPlay="autoplay" 
                        loop 
                        muted
                        className="bg-media"
                        >
                        <source src={HeroVideo} type="video/mp4" />
                        <source src={HeroVideo} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay-modal center-text">
                        <h1 className="no-padding no-margin no-line">Vector Process Solutions, Inc</h1>
                        <p>Adipisicing pariatur magna anim ea laborum ut aliquip non non occaecat magna.</p>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={901}>
                <div className="bg-media-container">
                   <img className="bg-media" alt="aerial-shot" src={require("../../assets/images/heroes/red-and-gray-industrial-machinery.jpg")} />
                    <div className="overlay-modal center-text">
                        <h1 className="no-padding no-margin no-line">Vector Process Solutions, Inc</h1>
                        <p>Adipisicing pariatur magna anim ea laborum ut aliquip non non occaecat magna.</p>
                    </div>
                </div>
            </MediaQuery>
            <div className="l-container">
                <h1>Products</h1>
                <br/>
                <Grid fluid>
                    <Row center="xs" className="box-text-v-align">
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">    
                            <img src={require("../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png")} alt="product" className="small responsive" />
                            <Link to="/products/pressure" className="display-block">
                                <button className="custom-btn btn-6"><span>Control Valves</span></button>
                            </Link>
                        </Col>  
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">    
                            <img src={require("../../assets/images/products/Orbit-Low E_Isometric.png")} alt="product" className="small responsive" />
                            <Link to="/products/pressure" className="display-block">
                                <button className="custom-btn btn-6"><span>Isolation</span></button>
                            </Link>
                        </Col>  
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">    
                            <img src={require("../../assets/images/products/unknown-valve.png")} alt="product" className="small responsive" />
                            <Link to="/products/pressure" className="display-block">
                                <button className="custom-btn btn-6"><span>Flow</span></button>
                            </Link>
                        </Col>  
                        <Col xs={12} sm={6} lg={3} className="s-margin-b">    
                            <img src={require("../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png")} alt="product" className="small responsive" />
                            <Link to="/products/pressure" className="display-block">
                                <button className="custom-btn btn-6"><span>Level</span></button>
                            </Link>
                        </Col>     
                    </Row>
                    <Row center="xs" className="box-text-v-align">
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">    
                            <img src={require("../../assets/images/products/TwinSeal8in8811TwinSealwithSafety.png")} alt="product" className="small responsive" />
                            <Link to="/products/pressure" className="display-block">
                                <button className="custom-btn btn-6"><span>Temperature</span></button>
                            </Link>
                        </Col>  
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">    
                            <img src={require("../../assets/images/products/Orbit-Low E_Isometric.png")} alt="product" className="small responsive" />
                            <Link to="/products/pressure" className="display-block">
                                <button className="custom-btn btn-6"><span>Automation</span></button>
                            </Link>
                        </Col>  
                        <Col xs={12} sm={6} lg={4} className="s-margin-b">    
                            <img src={require("../../assets/images/products/unknown-valve.png")} alt="product" className="small responsive" />
                            <Link to="/products/pressure" className="display-block">
                                <button className="custom-btn btn-6"><span>Filtration</span></button>
                            </Link>
                        </Col>     
                    </Row>
                </Grid>

              
                <h1>Companies Committed</h1>
                <Partners />
               
            </div>
            </>
        )
    }
}

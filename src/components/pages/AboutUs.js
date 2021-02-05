import React, { Component } from 'react'
import ContactForm from '../misc/ContactForm';
import SimpleMap from '../misc/SimpleMap';
import { Helmet } from 'react-helmet-async';

export default class AboutUs extends Component {
    render() {
        return (
            <>
            <div className="top-wrapper">
                <Helmet>
                    <title>About Us | Vector PSI</title>
                </Helmet>
                <h1>About Us</h1>
                <p>
                    Vector Process Solutions is a manufacturer’s representative covering the industrial markets of
                    Northern CA and Northern NV. Our focus is to provide strong, engineered solutions for flow
                    control, automation and instrumentation needs.
                </p>
                <p>
                    Adam Pennell, President of Vector Process Solutions, has 15 years of experience in industrial
                    sales. With a B.S. in Engineering from the Colorado School of Mines and a minor in
                    Economics, his primary sales expertise has been in actuation and control valves. He has
                    consistently been a sales and growth leader in the industry and is valued as a peer and
                    technical resource by his customers.
                    
                </p>

                <h2>Mission Statement</h2>
                <p>
                    Vector Process Solutions shall strive to be the market leader in flow control and automation. We will maintain an emphasis on technical expertise and 
                    strong customer relations to create deep penetration into our target industries. Profitable operations are to be achieved using ethical,
                    forward thinking growth strategies, while never losing focus of the needs of our customers.
                </p>
            </div>
            <div className="wrapper no-padding">
                <h2 className="s-margin-t">Areas Served</h2>
                <p className="s-margin-b">Strategically located in the Bay Area, Vector covers all industrial markets in Northern CA and Northern NV.</p>
            </div>
            <SimpleMap />
            <div className="wrapper no-padding">
                <h1>Contact Us</h1>
                <ContactForm />
            </div>
            
            </>
        )
    }
}

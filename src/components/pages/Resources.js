import React, { Component } from 'react'
import { Helmet } from 'react-helmet-async'
import lineSheet from '../../assets/pdfs/VectorPSI_LineSheetFinal-Reduced.pdf'
export default class Resources extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Resources | Vector PSI</title>
                </Helmet>
                <h1>Resources</h1>
                <p>More content coming soon!</p>
                <a href={lineSheet} download><button className="custom-btn btn-13">Download Our Line Sheet</button></a>
                {/* <p>More info coming soon, such as download links and announcements from key manufacturers showing their new representation.</p> */}
            </div>
        )
    }
}

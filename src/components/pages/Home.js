import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';


export default class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Home</h1>
                <p>
                    likely needs to go straight to a Products Overview as I’m not providing service or training.
                    Scrolling list of represented and distributed manufacturers at the bottom of the page.
                </p>
                <br/>
                <Grid fluid>
                    <Row center="xs">
                        <Col xs={12} sm={4}>
                            <i className="fas fa-seedling xl-icon" />
                            <h3>Column 1</h3>
                            <p>More information below</p>
                        </Col>
                        <Col xs={12} sm={4}>
                            <i className="fas fa-tree xl-icon" />
                            <h3>Column 2</h3>
                            <p>More information below</p>
                        </Col>
                        <Col xs={12} sm={4}>
                            <i className="fas fa-globe-africa xl-icon" />
                            <h3>Column 3</h3>
                            <p>More information below</p>
                        </Col>
                    </Row>
                </Grid>
                <h1>Manufacturing Companies Committed</h1>
                <p>
                    Badger Meter – www.badgermeter.com
                    Spifil - http://spifil.com/en/
                    Azbil North America – www.us.azbil.com
                    Questtec Solutions - https://www.questtecsolutions.com/
                    Warren Controls - http://www.warrencontrols.com/
                    Cameron - https://www.products.slb.com/valves

                    Pending Final Approval
                    IMI Critical Engineering - http://www.imi-critical.com/Pages/default.aspx
                    Clearguard - http://clearguard.com/
                    Bray International - https://bray.com/
                    Rexa - https://www.rexa.com/
                    Andronaco - https://www.andronaco.com/
                </p>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Polygon, Marker  } from 'google-maps-react';

class SimpleMap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mapStyles: {
                width: '100%',
                height: '100%'
              }
        }
    }

    render() {
        const overlayArea = 
        [
            {lat:35.15738228766522,lng:-120.72082766408951},
            {lat:35.26509641031885,lng:-120.31433352346451},
            {lat:35.09448308625478,lng:-119.57824953908951},
            {lat:34.96853905064701,lng:-117.76550539846451},
            {lat:35.8015182519093,lng:-117.98523196096451},
            {lat:36.24578893636003,lng:-116.08459719533951},
            {lat:36.91626693353147,lng:-115.95276125783951},
            {lat:36.93383235992679,lng:-114.04114016408951},
            {lat:41.98539129449695,lng:-114.08508547658951},
            {lat:41.96577628726935,lng:-119.97505676958451},
            {lat:41.95271768707809,lng:-124.19250735158951},
            {lat:40.498521548127535,lng:-124.36828860158951},
            {lat:38.97795354595238,lng:-123.70910891408951},
            {lat:37.17932303924626,lng:-122.36877688283951},
            {lat:36.951393739023665,lng:-121.81946047658951},
            {lat:36.36973524489245,lng:-121.8853784453395}
        ]
        
        return (
            <div style={{ position: 'relative', width: '100vw', height: '40vh' }}>
                <Map
                    google={this.props.google}
                    zoom={5.5}
                    style={this.state.mapStyles}
                    initialCenter={{ lat: 38.779167, lng: -120.808891}}
                    clickableIcons={true}
                    >
                        <Polygon
                            paths={overlayArea}
                            strokeColor="#E3352B"
                            strokeOpacity={0.8}
                            strokeWeight={2}
                            fillColor="#EE8680"
                            fillOpacity={0.35} />
                             <Marker
                                onClick={this.onMouseoverMarker}
                                label={{
                                    text:`HQ`,
                                    fontWeight:'', 
                                    fontSize:'12px', 
                                    color:'#FFFFFF'
                                }}
                                title={`Vector Process Solutions' Headquarters`}
                                name={'HQ'}
                                position={{lat: 37.768520, lng: -121.960630}} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_FIREBASE_LIVE_API_KEY
  })(SimpleMap);

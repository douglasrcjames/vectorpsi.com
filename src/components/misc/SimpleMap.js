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
        const northernCalifornia = 
        [
            {lat:42.03504282912358,lng:-124.23644331711506},
            {lat:41.969729824680435,lng:-120.14952925461506},
            {lat:41.95218133499178,lng:-117.01803803072832},
            {lat:41.95339109879934,lng:-114.10704878586506},
            {lat:39.77737279923363,lng:-114.09615742897432},
            {lat:38.933437173191024,lng:-119.9491337054938},
            {lat:37.44929174308544,lng:-117.84074672065886},
            {lat:35.167596573886804,lng:-120.67696797584932},
            {lat:38.97013707332125,lng:-123.72768731963345},
            {lat:40.46535833052174,lng:-124.4088396633834},
        ]
        
        return (
            <div style={{ position: 'relative', width: '100vw', height: '40vh' }}>
                <Map
                    google={this.props.google}
                    zoom={6}
                    style={this.state.mapStyles}
                    initialCenter={{ lat: 38.779167, lng: -120.808891}}
                    clickableIcons={true}
                    >
                        <Polygon
                            paths={northernCalifornia}
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

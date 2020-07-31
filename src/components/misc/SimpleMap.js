import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

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
        return (
            <div style={{ position: 'relative', width: '100vw', height: '40vh' }}>
                <Map
                    google={this.props.google}
                    zoom={4.2}
                    style={this.state.mapStyles}
                    initialCenter={{ lat: 38.779167, lng: -96.808891}}
                    >
                    <Marker position={{ lat: 37.7749, lng: -122.4194}} />
                    <Marker position={{ lat: 36.114647, lng: -115.172813}} />
                    <Marker position={{ lat: 32.779167, lng: -96.808891}} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY
  })(SimpleMap);

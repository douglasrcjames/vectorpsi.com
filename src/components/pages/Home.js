import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Partners from '../misc/Partners';
import Categories from './products/Categories';

export default class Home extends Component {
    render() {
        var HeroSkylineVideo = `https://firebasestorage.googleapis.com/v0/b/vectorpsi-com.appspot.com/o/site%2Findustrial-skyline-slow.mp4?alt=media&token=6b32107d-512d-41a7-97b6-ffe67c0817f5`;
        // var HeroPipesVideo = `https://firebasestorage.googleapis.com/v0/b/vectorpsi-com.appspot.com/o/site%2Fslowed-pipes-video.mp4?alt=media&token=1b7e4bad-becb-4b36-906d-55284e6941b4`;
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
                        <source src={HeroSkylineVideo} type="video/mp4" />
                        <source src={HeroSkylineVideo} type="video/ogg" />
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
                    {/* red-and-gray-industrial-machinery.jpg */}
                   <img className="bg-media" alt="aerial-shot" src={require("../../assets/images/heroes/industrial-skyline.jpg")} />
                    <div className="overlay-modal center-text">
                        <h1 className="no-padding no-margin no-line">Vector Process Solutions, Inc</h1>
                        <p>Adipisicing pariatur magna anim ea laborum ut aliquip non non occaecat magna.</p>
                    </div>
                </div>
            </MediaQuery>
            <div className="l-container">
                <h1>Products</h1>
                <br/>
                <Categories />
              
                <h1>Companies Committed</h1>
                <Partners />
                
            </div>
            </>
        )
    }
}

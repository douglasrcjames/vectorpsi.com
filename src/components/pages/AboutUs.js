import React, { Component } from 'react'
import ContactForm from '../misc/ContactForm';
import SimpleMap from '../misc/SimpleMap';

export default class AboutUs extends Component {
    render() {
        return (
            <>
            <div className="wrapper m-padding-t">
                <h1>About Us</h1>
                <p>
                    Our headquarters is in Danville, CA. We have 15 years experience in the field. Lorem ex consequat amet magna nisi fugiat et. Fugiat veniam reprehenderit commodo dolore mollit nulla consectetur occaecat fugiat incididunt exercitation do. 
                    Voluptate excepteur quis tempor sit do magna aliquip in mollit. Id sit amet excepteur consectetur dolor non anim labore. Fugiat incididunt velit Lorem est. 
                    Ut ad culpa cupidatat tempor ut aliquip dolore aliqua laboris. Proident ex excepteur velit do eu incididunt eu cupidatat. Voluptate ut laboris magna dolor mollit ut esse laborum consectetur. 
                    Excepteur consequat ea qui aute ullamco duis adipisicing culpa ex esse commodo Lorem elit. Proident laboris et mollit laboris quis cupidatat excepteur aliqua dolor eiusmod eu ad. 
                    Lorem ex consequat amet magna nisi fugiat et. Fugiat veniam reprehenderit commodo dolore mollit nulla consectetur occaecat fugiat incididunt exercitation do. 
                    Voluptate excepteur quis tempor sit do magna aliquip in mollit. Id sit amet excepteur consectetur dolor non anim labore. Fugiat incididunt velit Lorem est. 
                    Ut ad culpa cupidatat tempor ut aliquip dolore aliqua laboris. Proident ex excepteur velit do eu incididunt eu cupidatat. Voluptate ut laboris magna dolor mollit ut esse laborum consectetur. 
                    Excepteur consequat ea qui aute ullamco duis adipisicing culpa ex esse commodo Lorem elit. Proident laboris et mollit laboris quis cupidatat excepteur aliqua dolor eiusmod eu ad. 
                    
                </p>

                <p>
                    Lorem ex consequat amet magna nisi fugiat et. Fugiat veniam reprehenderit commodo dolore mollit nulla consectetur occaecat fugiat incididunt exercitation do. 
                    Voluptate excepteur quis tempor sit do magna aliquip in mollit. Id sit amet excepteur consectetur dolor non anim labore. Fugiat incididunt velit Lorem est. 
                    Ut ad culpa cupidatat tempor ut aliquip dolore aliqua laboris. Proident ex excepteur velit do eu incididunt eu cupidatat. Voluptate ut laboris magna dolor mollit ut esse laborum consectetur. 
                    Excepteur consequat ea qui aute ullamco duis adipisicing culpa ex esse commodo Lorem elit. Proident laboris et mollit laboris quis cupidatat excepteur aliqua dolor eiusmod eu ad. 
                </p>

                <h2>Mission Statement</h2>
                <p>
                    Vector Process Solutions shall strive to be the market leader in flow control and automation. We will maintain an emphasis on technical expertise and 
                    strong customer relations to create deep penetration into our target industries. Profitable operations are to be achieved using ethical,
                    forward thinking growth strategies, while never losing focus of the needs of our customers.
                </p>
            </div>
            <div className="wrapper no-padding">
                <h2>Areas Served</h2>
                <p>We are headquartered in Danville, CA and proudly serve Northern California and Northern Nevada</p>
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

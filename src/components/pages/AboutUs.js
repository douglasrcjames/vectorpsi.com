import React, { Component } from 'react'
import ContactForm from '../misc/ContactForm';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>About Us</h1>
                <p>
                    location, areas served, 15 years experience
                </p>
                <h2>Mission Statement</h2>
                <p>Ipsum quis proident nostrud quis aute enim occaecat ut. Sit eu velit ullamco nulla laborum Lorem amet culpa aute ex aliqua cupidatat esse. 
                    Sit fugiat ut nisi laboris sunt exercitation dolor ipsum. Nulla reprehenderit pariatur et velit ut consequat Lorem duis non aliquip. 
                    Nisi eu velit minim fugiat occaecat cupidatat laboris amet fugiat pariatur. Magna laborum voluptate aliqua pariatur fugiat exercitation 
                    elit nostrud. Nostrud cupidatat esse irure nulla eiusmod amet culpa deserunt aute adipisicing deserunt fugiat.</p>
                <h1>Contact</h1>
                <ContactForm />
            </div>
        )
    }
}

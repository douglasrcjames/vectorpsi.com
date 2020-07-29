import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
        };
    }

    render() {
        return (
            <footer>
                <div className="f-container">
                    <div>
                        <a href="https://www.douglasrcjames.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by douglasrcjames</a> 
                    </div>
                    <div>
                        &copy;
                        {' '}
                        {this.state.year}
                        {' '}
                        Vector Process Solutions
                    </div>
                </div>
            </footer>
        )
    }
}

import React, { Component } from 'react'
import '../../assets/css/Header.css'
import MediaQuery from "react-responsive";
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.toggler = React.createRef();
        this.state = {
             menuOpen: false
        }
    }

    toggleMenu(){
        this.toggler.current.checked = !this.state.menuOpen;
        this.setState({menuOpen: !this.state.menuOpen})
    }
    
    render() {
        const menuArray = ['Products', 'Industries', 'About Us', 'Resources']
        return (
                <header className="nav-wrapper">
                    <nav role="navigation" className="p-container">
                        <NavLink to="/" exact className="nav-logo-group" activeClassName="active">
                            <img
                                className="responsive nav-logo"
                                alt="company logo"
                                src={require("../../assets/images/logos/icon.png")}
                                />
                            <span className="nav-logo-font">VECTOR PSI</span>
                        </NavLink>
                        <MediaQuery minWidth={1001}>
                            <div className="nav-links">
                                <ul>
                                    {  menuArray.map((val, index)=>{
                                            return (
                                                <li key={index}>
                                                    <NavLink 
                                                        exact
                                                        activeClassName="active"
                                                        to={`/${val.split(" ").join("-").toLowerCase()}`}>
                                                        {val}
                                                        <span></span>
                                                        <span></span>
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </MediaQuery>
                        <MediaQuery maxWidth={1000}>
                            <div className="menu-wrap">
                                <input type="checkbox" ref={this.toggler} onClick={() => this.toggleMenu()} className="toggler"/>
                                <div className="hamburger"><div></div></div>
                                <div className="menu">
                                    <div>
                                        <div>
                                            <ul>
                                                {  menuArray.map((val, index)=>{
                                                        return (
                                                            <li key={index}>
                                                                <NavLink 
                                                                    onClick={() => this.toggleMenu()} 
                                                                    exact
                                                                    // activeClassName="active"
                                                                    to={`/${val.split(" ").join("-").toLowerCase()}`}>
                                                                    {val}
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MediaQuery>
                    </nav>
                </header>

            
        )
    }
}

export default withRouter(Header);
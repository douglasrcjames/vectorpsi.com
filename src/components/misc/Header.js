import React, { Component } from 'react'
import { NavLink, Link, withRouter } from "react-router-dom";
import "../../assets/css/Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav-container">
                    <Link to="/" className="">
                        {/* TODO: update name & logo */}
                        <img
                            className="nav-logo"
                            alt="logo"
                            src={require("../../assets/images/logos/logo512.png")}
                        />
                        <span className="nav-l-text">Vector Process Solutions</span>
                    </Link>
                    <div className="nav-links">
                        <NavLink 
                            exact
                            to="/products" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            Products
                        </NavLink>
                        <NavLink 
                            exact
                            to="/industries" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            Industries
                        </NavLink>
                        <NavLink 
                            exact
                            to="/about-us" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            About Us
                        </NavLink>
                        <NavLink 
                            exact
                            to="/resources" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            Resources
                        </NavLink>
                    </div>
                    
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);
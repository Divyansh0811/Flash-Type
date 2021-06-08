import React from 'react';
import logo from './../../assests/logo.png'
import './Nav.css'

const Nav= () => {
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="logo" className="flash-logo" />
                <p className="flash-logo-text">FLASHTYPE</p>
            </div>
            <div className="nav-right">
                <a
                target= "_blank"
                className = "nav-gitHub-link"
                href="http://github.com/Divyansh0811"
                rel="noreferrer"
                >
                    CODE
                </a>
            </div>
        </div>
    )
};

export default Nav;
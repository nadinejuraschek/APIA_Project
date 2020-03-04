import React from 'react';
import logo from '../images/embrace.svg';
import defaultProfilePic from '../images/profile-blank.svg';

const Navbar = () => {
    return (
        <nav className="navbar is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img alt="App Logo" src={logo} width="112" height="28" />
                    Au Pair App
                </a>
            
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        <img alt="Profile Placeholder" className="profile-dropdown" src={defaultProfilePic} alt="profile dropdown" />
                        </a>
                        <div className="navbar-dropdown is-right">
                        <a className="navbar-item" href="/profile">
                            Profile
                        </a>
                        <a className="navbar-item" href="/emergency">
                            Emergency Numbers
                        </a>
                        <a className="navbar-item" href="/login">
                            Log Out
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
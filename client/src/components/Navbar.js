// REACT
import React, { useContext } from 'react';
import { withRouter } from "react-router";

// IMAGES
import logo from '../images/logo.svg';

// NPM PACKAGES
import axios from 'axios';

// CONTEXT
import { UserContext } from '../contexts/UserContext';

const Navbar = (props) => {
    const [ user, setUser ] = useContext(UserContext);

    const handleLogout = () => {
        axios({
            url: '/api/user/signout',
            method: 'POST'
        }).then(response => {
            props.history.push('/login');
        });
    };

    return (
        <nav className="ui huge top fixed menu">
            <a className="header item" href="/home">
                <img className="nav-logo" alt="App Logo" src={logo} />
                On Par
            </a>

            <div className="right menu">
                { (user) ?
                    <div className="ui simple dropdown item">
                        <i className="user large circle icon"></i>
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <a className="item" href="/profile">Profile</a>
                            <a className="item" href="/emergencynumbers">Emergency Numbers</a>
                            <button className="item" onClick={handleLogout}>Log Out</button>
                        </div>
                    </div>
                    :
                    <a className="item" href="/login">Log In</a>
                }
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
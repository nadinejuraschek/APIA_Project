import React from 'react';
import logo from '../images/embrace.svg';
import { withRouter } from "react-router";
import axios from 'axios';

const Navbar = (props) => {
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
            <a className="header item" href="/">
                <img alt="App Logo" src={logo} width="112" height="28" />
                Au Pair App
            </a>

            <div className="right menu">
                <div className="ui simple dropdown item">
                    <i className="user large circle icon"></i>
                    <i className="dropdown icon"></i>
                    <div className="menu">
                        <a className="item" href="/profile">Profile</a>
                        <a className="item" href="/emergencynumbers">Emergency Numbers</a>
                        <button className="ui button" onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
import React, { Component } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

import Header from '../../Header';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        axios.get('/api/user').then(response => {
            this.setState({ user: response.data });
            this.state.user ? this.props.history.push('/home') : this.props.history.push('/register');
        }).catch(error => {
            console.log('Error: ' + error.message);
        });
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({ [name]: value });
    };

    render() {
        return (
            <section className="wrapper">
                <div className="block">

                    <Header header="Login" />
                    
                    <div className="custom-container auth-container">
                        <form className="ui form" onSubmit={this.handleSubmit}>

                            <div className="field">
                                <label>E-Mail</label>
                                <div className="ui left icon input">
                                    <i className="mail icon"></i>
                                    <input type="text" name="username" placeholder="E-Mail" onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="centered">
                                <button className="ui button" type="submit">Log In</button>
                            </div>

                            <div className="ui message centered">
                                <p>Don't have an account, yet?</p>
                                <a href="/register" className="ui button">
                                    Register
                                </a>
                                <p>Or Log In with</p>
                                <div className="ui small buttons">
                                    <button className="ui facebook button">
                                        <i className="facebook icon"></i>
                                        Facebook
                                    </button>
                                    <div className="or"></div>
                                    <button className="ui google plus button">
                                        <i className="google icon"></i>
                                        Google
                                    </button>
                                </div>
                            </div>
                        
                        </form>
                    </div>

                </div>
            </section>
        );
    };
};

export default withRouter(Login);
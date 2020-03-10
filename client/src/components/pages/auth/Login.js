import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../Header';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        axios({
            url: '/api/user/login',
            method: 'POST',
            data: {
                email,
                password
            }
        })
        .then(response => {
            this.props.history.push('/profile');
        })
        .catch(error => {
            console.log('Error: ' + error.response);
        });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
                                    <input type="text" name="username" onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" onChange={this.handleChange} />
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

export default Login;
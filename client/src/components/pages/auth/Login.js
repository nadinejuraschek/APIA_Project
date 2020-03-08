import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        axios({
            url: '/login',
            method: 'POST',
            data: {
                email,
                password
            }
        })
        .then(response => {
            console.log('Data: ' + response.data);
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

                        <button className="ui button" type="submit">Log In</button>

                        <div className="ui message">
                            <p>Don't have an account, yet?</p>
                            <a href="/register" className="ui button">
                                Register
                            </a>
                            <p>Or Log In with</p>
                            <div className="ui buttons">
                                <button className="ui google plus button">
                                    <i className="google icon"></i>
                                    Google
                                </button>
                                <div className="or"></div>
                                <button className="ui facebook button">
                                    <i className="facebook icon"></i>
                                    Facebook
                                </button>
                                <div className="or"></div>
                                <button className="ui instagram button">
                                    <i className="instagram icon"></i>
                                    Instagram
                                </button>
                            </div>
                        </div>
                    
                    </form>

                </div>
            </section>
        );
    };
};

export default Login;
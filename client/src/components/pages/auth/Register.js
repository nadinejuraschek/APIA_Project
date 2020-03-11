import React, { Component } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

import Header from '../../Header';

class Register extends Component {
    state = {
        role: '',
        familyID: '',
        firstname: '',
        lastname: '',
        country: '',
        email: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        const newUser = this.state;
        axios({
            url: '/api/user/register',
            method: 'POST',
            data: newUser
        })
        .then(response => {
            console.log('Data: ' + response.data);
            this.props.history.push('/home');
        })
        .catch(error => {
            console.log('Error: ' + error.response);
        });
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({[name]: value });
    };

    render() {
        return (
            <section className="wrapper">
                <div className="block">

                    <Header header="Register" />

                    <div className="custom-container auth-container">
                        <form className="ui form" onSubmit={this.handleSubmit}>

                            <div className="field">
                                <label>I am a</label>
                                <select className="ui fluid dropdown">
                                    <option className="default text" value="">Choose One</option>
                                    <option value="aupair" name="role">Au Pair</option>
                                    <option value="family" name="role">Host Family Member</option>
                                    <option value="lcc" name="role">Community Counselor</option>
                                </select>
                            </div>

                            <div className="field">
                                <label>Your Host Family's ID</label>
                                <div className="ui left icon input">
                                    <i className="users icon"></i>
                                    <input type="text" name="familyID" placeholder="Host Family ID" onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Your Name</label>
                                <div className="two fields">
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <i className="user icon"></i>
                                            <input type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <i className="user icon"></i>
                                            <input type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <label>Home Country</label>
                                <select className="ui fluid dropdown">
                                    <option className="default text">Select Country</option>
                                    <option className="item" value="ar">Argentina</option>
                                    <option className="item" value="au">Australia</option>
                                    <option className="item" value="at">Austria</option>
                                    <option className="item" value="bo">Bolivia</option>
                                    <option className="item" value="ba">Bosnia</option>
                                    <option className="item" value="br">Brazil</option>
                                    <option className="item" value="ca">Canada</option>
                                    <option className="item" value="cl">Chile</option>
                                    <option className="item" value="cn">China</option>
                                    <option className="item" value="co">Colombia</option>
                                    <option className="item" value="cr">Costa Rica</option>
                                    <option className="item" value="hr">Croatia</option>
                                    <option className="item" value="cz">Czech Republic</option>
                                    <option className="item" value="dk">Denmark</option>
                                    <option className="item" value="ec">Ecuador</option>
                                    <option className="item" value="sv">El Salvador</option>
                                    <option className="item" value="ee">Estonia</option>
                                    <option className="item" value="fi">Finland</option>
                                    <option className="item" value="fr">France</option>
                                    <option className="item" value="de">Germany</option>
                                    <option className="item" value="gt">Guatemala</option>
                                    <option className="item" value="hu">Hungary</option>
                                    <option className="item" value="ie">Ireland</option>
                                    <option className="item" value="il">Israel</option>
                                    <option className="item" value="it">Italy</option>
                                    <option className="item" value="lv">Latvia</option>
                                    <option className="item" value="mx">Mexico</option>
                                    <option className="item" value="nl">Netherlands</option>
                                    <option className="item" value="nz">New Zealand</option>
                                    <option className="item" value="pa">Panama</option>
                                    <option className="item" value="pe">Peru</option>
                                    <option className="item" value="pl">Poland</option>
                                    <option className="item" value="pt">Portugal</option>
                                    <option className="item" value="ru">Russia</option>
                                    <option className="item" value="cs">Serbia</option>
                                    <option className="item" value="rs">Serbia</option>
                                    <option className="item" value="sk">Slovakia</option>
                                    <option className="item" value="za">South Africa</option>
                                    <option className="item" value="kr">South Korea</option>
                                    <option className="item" value="es">Spain</option>
                                    <option className="item" value="se">Sweden</option>
                                    <option className="item" value="ch">Switzerland</option>
                                    <option className="item" value="th">Thailand</option>
                                    <option className="item" value="tr">Turkey</option>
                                    <option className="item" value="ua">Ukraine</option>
                                    <option className="item" value="gb">United Kingdom</option>
                                </select>
                            </div>

                            <div className="field">
                                <label>E-Mail</label>
                                <div className="ui left icon input">
                                    <i className="envelope icon"></i>
                                    <input type="text" name="email" placeholder="E-Mail" onChange={this.handleChange} />
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
                                <button className="ui button" type="submit">Register</button>
                            </div>

                            <div className="ui message centered">
                                <p>Already have an account?</p>
                                <a href="/login" className="ui button">
                                    Log In
                                </a>
                            </div>
                        
                        </form>
                    </div>
                    
                </div>
            </section>
        );
    }
};

export default withRouter(Register);
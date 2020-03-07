import React from 'react';

const Register = () => {
    return (
        <section className="wrapper">
            <div className="block">

                <form className="ui form">

                    <div className="field">
                        <label>I am a</label>
                        <select className="ui fluid dropdown">
                            <option value=""></option>
                            <option value="aupair">Au Pair</option>
                            <option value="family">Host Family Member</option>
                            <option value="lcc">Community Counselor</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>Your Host Family's ID</label>
                        <div className="ui left icon input">
                            <i class="users icon"></i>
                            <input type="text" name="register[familyID]" placeholder="Host Family ID" />
                        </div>
                    </div>

                    <div className="field">
                        <label>Your Name</label>
                        <div className="two fields">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i class="user icon"></i>
                                    <input type="text" name="register[firstname]" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i class="user icon"></i>
                                    <input type="text" name="register[lastname]" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>E-Mail</label>
                        <div className="ui left icon input">
                            <i class="envelope icon"></i>
                            <input type="text" name="register[email]" placeholder="E-Mail" />
                        </div>
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <i class="lock icon"></i>
                            <input type="password" name="register[password]" placeholder="Password" />
                        </div>
                    </div>

                    <button className="ui button" type="submit">Register</button>
                
                </form>

                <div className="ui message">
                    <p>Already have an account?</p>
                    <a href="/register" className="ui button">
                        Log In
                    </a>
                </div>
                
            </div>
        </section>
    );
};

export default Register;
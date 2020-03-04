import React from 'react';

const Register = () => {
    return (
        <section className="hero is-fullheight-with-navbar is-bold">
            <div className="hero-body">
                <div className="signup-div">
                    
                    <div className="field">
                        <label className="label is-medium">I am a</label>
                        <div className="control has-icons-left">
                            <span className="select is-medium">
                            <select>
                                <option>Au Pair</option>
                                <option>Host Family Member</option>
                                <option>Community Counselor</option>
                            </select>
                            <span className="icon is-small is-left">
                                <i className="fas fa-child icon-color"></i>
                            </span>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-medium">Your Host Family's ID</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="text" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-fingerprint icon-color"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-medium">Your Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="text" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user icon-color"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-medium">Your E-Mail</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="text" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope icon-color"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-medium">Your Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock icon-color"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <p className="control has-text-centered">
                        <a className="button is-danger">
                            Register
                        </a>
                        </p>
                    </div>

                    <div className="field is-horizontal">
                        <p>Already have an account?</p>
                        <a className="button is-danger">
                            Log In
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Register;
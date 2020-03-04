import React from 'react';

const Login = () => {
    return (
        <section className="hero is-fullheight-with-navbar is-bold">
            <div className="hero-body">
                <div className="signup-div">

                    <div className="field">
                        <label className="label is-medium">E-Mail</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="text" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope icon-color"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-medium">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock icon-color"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <p className="control has-text-centered">
                            <a className="button is-danger">
                            Log In
                            </a>
                        </p>
                    </div>

                    <div className="field is-horizontal">
                        <p>Don't have an account, yet?</p>
                        <a href="/register" className="button is-danger">
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
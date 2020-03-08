import React from 'react';

const Login = () => {
    return (
        <section className="wrapper">
            <div className="block">

                <form className="ui form">

                    <div className="field">
                        <label>E-Mail</label>
                        <div className="ui left icon input">
                            <i className="mail icon"></i>
                            <input type="text" name="username" />
                        </div>
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <i className="lock icon"></i>
                            <input type="password" name="password" />
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

export default Login;
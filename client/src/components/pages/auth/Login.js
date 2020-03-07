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
                    </div>
                
                </form>

            </div>
        </section>
    );
};

export default Login;
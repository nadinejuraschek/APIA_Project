import React from 'react';

const Login = () => {
    return (
        <section className="wrapper">
            <div className="block">

                <form className="ui form">

                    <div className="field">
                        <label>E-Mail</label>
                        <input type="text" name="email" />
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>

                    <button className="ui button" type="submit">Log In</button>

                    <div className="field">
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
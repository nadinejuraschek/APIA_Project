import React from 'react';

import logo from '../../images/embrace.svg';

const Landing = () => {
    return (
        <section className="wrapper">
            <div className="block">

                <div className="pageheader">
                    <h2 className="ui large center aligned icon header">
                        <img alt="App Logo" src={logo} />
                        Au Pair App
                    </h2>
                </div>

                <div className="ui stackable grid">
                    <div className="row">
                        <div className="eight wide column">
                            <h3 className="ui header">We Help Companies and Companions</h3>
                            <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                            <h3 className="ui header">We Make Bananas That Can Dance</h3>
                            <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                            </div>
                            <div className="six wide right floated column">
                            <img src="assets/images/wireframe/white-image.png" className="ui large bordered rounded image" alt="landing" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="center aligned column">
                            <a className="ui huge button" href="/home">Check Them Out</a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
import React from 'react';
// import logo from '../images/embrace.svg';

const Footer = () => {
    return (
        <footer className="ui vertical footer segment">
            {/* <h2 className="ui center aligned icon header">
                <img alt="App Logo" src={logo} />
                Au Pair App
            </h2> */}
                <div className="centered">
                    <p className="copyright">
                        <i className="copyright outline icon"></i>
                         2020
                        <a href="https://github.com/nadinejuraschek" className="footer-link"> Nadine Juraschek</a>
                    </p>
                    {/* <p className="copyright">
                        Illustrations and Icons by 
                        <a href="#">Ziv Pesso</a>
                    </p> */}
                </div>
        </footer>
    );
};

export default Footer;
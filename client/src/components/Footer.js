import React from 'react';
// import logo from '../images/embrace.svg';

const Footer = () => {
    return (
        <footer className="ui vertical footer segment">
            {/* <h2 class="ui center aligned icon header">
                <img alt="App Logo" src={logo} />
                Au Pair App
            </h2> */}
            <div className="ui center aligned container">
                <div>
                    <p className="copyright"><i class="copyright outline icon"></i> 2020</p>
                    {/* <p className="copyright">Nadine Juraschek</p> */}
                    {/* <p className="copyright">
                        Illustrations and Icons by 
                        <a href="#">Ziv Pesso</a>
                    </p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
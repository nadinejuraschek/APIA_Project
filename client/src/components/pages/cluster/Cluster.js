import React from 'react';
import blankPic from '../../../images/blankProfile.svg';

const Cluster = () => {
    return (
        <section className="wrapper">
            <div className="block">
                <h2>My Cluster</h2>
                <div className="ui stackable grid">
                    <div className="two column centered row">

                        <div className="column">
                            <div className="ui card">
                                <div className="content">
                                    <img className="right floated mini ui avatar image" src={blankPic} />
                                    <div className="header">
                                        Counselor Name
                                    </div>
                                    <div className="meta">
                                        Local Community Counselor
                                    </div>
                                    <div className="description">
                                        <p>
                                            <i className="envelope square icon"></i>
                                             example@mail.com</p>
                                        <p>
                                            <i className="phone square icon"></i>
                                             +1 (222) 333-4444</p>
                                        <p>
                                            <i className="info circle icon"></i>
                                             Can be reached 8 AM - 7 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui card">
                                <div className="content">
                                    <div className="ui medium header">
                                        Au Pairs in Your Cluster
                                    </div>
                                    <div className="ui relaxed list">

                                        <div className="item">
                                            <img className="ui avatar image" src={blankPic} />
                                            <div className="content">
                                                <p className="header">Friend Name</p>
                                                <p className="description">
                                                    <span>Home Country: </span>
                                                    <br />
                                                    <span><i className="envelope square icon"></i> example@mail.com</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <img className="ui avatar image" src={blankPic} />
                                            <div className="content">
                                                <p className="header">Friend Name</p>
                                                <p className="description">
                                                    <span>Home Country: </span>
                                                    <br />
                                                    <span><i className="envelope square icon"></i> example@mail.com</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <img className="ui avatar image" src={blankPic} />
                                            <div className="content">
                                                <p className="header">Friend Name</p>
                                                <p className="description">
                                                    <span>Home Country: </span>
                                                    <br />
                                                    <span><i className="envelope square icon"></i> example@mail.com</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <img className="ui avatar image" src={blankPic} />
                                            <div className="content">
                                                <p className="header">Friend Name</p>
                                                <p className="description">
                                                    <span>Home Country: </span>
                                                    <br />
                                                    <span><i className="envelope square icon"></i> example@mail.com</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <img className="ui avatar image" src={blankPic} />
                                            <div className="content">
                                                <p className="header">Friend Name</p>
                                                <p className="description">
                                                    <span>Home Country: </span>
                                                    <br />
                                                    <span><i className="envelope square icon"></i> example@mail.com</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <img className="ui avatar image" src={blankPic} />
                                            <div className="content">
                                                <p className="header">Friend Name</p>
                                                <p className="description">
                                                    <span>Home Country: </span>
                                                    <br />
                                                    <span><i className="envelope square icon"></i> example@mail.com</span>
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ui divider"></div>

                    <div className="four column row">
                        
                        <div className="column">
                            <div className="ui card">
                                <div className="content">
                                    <div className="ui medium header">
                                        <a>My Area</a>
                                    </div>
                                    <div className="meta">
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="column">
                            <div className="ui card">
                                <div className="content">
                                    <div className="ui medium header">
                                        <a>Education</a>
                                    </div>
                                    <div className="meta">
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="column">
                            <div className="ui card">
                                <div className="content">
                                    <div className="ui medium header">
                                        <a>Travel</a>
                                    </div>
                                    <div className="meta">
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="column">
                            <div className="ui card">
                                <div className="content">
                                    <div className="ui medium header">
                                        <a>Resources</a>
                                    </div>
                                    <div className="meta">
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cluster;
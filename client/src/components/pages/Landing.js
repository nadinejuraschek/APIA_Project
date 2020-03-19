// REACT
import React from 'react';

const Landing = () => {
    return (
        <>
            <div className="ui vertical masthead center aligned segment">
                <div className="wrapper">
                    <div className="block">

                        <h1 className="landing-header">
                            On Par
                        </h1>
                        <h1 className="ui header">
                            The Au Pair's Assistant
                        </h1>
                        <h2 className="tagline">Because taking care of kids is hard enough.</h2>
                        <button className="start-button">
                            Get Started  
                            <i className="right arrow icon"></i>
                        </button>

                    </div>
                </div>
            </div>

            <div className="custom-container landing-container">
                <div className="ui stackable grid">
                    <div className="four column row">

                        <div className="column">
                            <div className="ui fluid card landing-card">
                                <div className="card-content">
                                    <div className="icon-padding centered">
                                        <i className="massive sticky note outline icon"></i>
                                    </div>
                                    <p className="landing-col-header centered">
                                        Save
                                        <br/>
                                        Important Information
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui fluid card landing-card">
                                <div className="card-content">
                                    <div className="icon-padding centered">
                                        <i className="massive sticky note outline icon"></i>
                                    </div>
                                    <p className="landing-col-header centered">
                                        Find
                                        <br/>
                                        Activities and Resources
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui fluid card landing-card">
                                <div className="card-content">
                                    <div className="icon-padding centered">
                                        <i className="massive sticky note outline icon"></i>
                                    </div>
                                    <p className="landing-col-header centered">
                                        Share
                                        <br/>
                                        With Your Host Family
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui fluid card landing-card">
                                <div className="card-content">
                                    <div className="icon-padding centered">
                                        <i className="massive sticky note outline icon"></i>
                                    </div>
                                    <p className="landing-col-header centered">
                                        Get to Know 
                                        <br/>
                                        Your Cluster
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
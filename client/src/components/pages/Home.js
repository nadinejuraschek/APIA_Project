import React from 'react';
import notebookIcon from '../../images/book.svg';
import hostFamilyIcon from '../../images/family.svg';
import clusterIcon from '../../images/cluster.svg';

const Home = () => {
    return (
        <section className="wrapper">
            <div className="block">
                <div className="ui vertical center aligned segment nav-push middle-aligned">
                    <div className="ui container">
                        <h2 className="ui header">
                            Good morning, Name!
                        </h2>
                        <h3 className="ui header">
                            What Can I Help You With?
                        </h3>

                        <div className="ui three column grid">
                            <div className="column">
                                <div className="card">
                                    <a href="/notebook">
                                            <div className="card-content">
                                                <p>My Notebook</p>
                                                <img src={notebookIcon} className="section-icon" alt="notebook" />
                                            </div>
                                        </a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <a href="/hostfamily">
                                        <div className="card-content">
                                            <p>My Host Family</p>
                                            <img src={hostFamilyIcon} className="section-icon" alt="hostfamily" />
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <a href="/cluster">
                                        <div className="card-content">
                                            <p>My Cluster</p>
                                            <img src={clusterIcon} className="section-icon" alt="cluster" />
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
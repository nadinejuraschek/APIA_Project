import React from 'react';
import notebookIcon from '../../images/book.svg';
import hostFamilyIcon from '../../images/family.svg';
import clusterIcon from '../../images/cluster.svg';

const Home = () => {
    return (
        <section className="hero is-fullheight-with-navbar is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">
                        Good morning, Name!
                    </h1>
                    <h2 className="subtitle is-3">
                        What Can I Help You With?
                    </h2>
                    <div className="columns">
                        <div className="column is-one-third">
                            <div className="card">
                                <a href="/notebook">
                                    <div className="card-content">
                                        <p>My Notebook</p>
                                        <img src={notebookIcon} className="section-icon" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="card">
                                <a href="/hostfamily">
                                    <div className="card-content">
                                        <p>My Host Family</p>
                                        <img src={hostFamilyIcon} className="section-icon" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="card">
                                <a href="/cluster">
                                    <div className="card-content">
                                        <p>My Cluster</p>
                                        <img src={clusterIcon} className="section-icon" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
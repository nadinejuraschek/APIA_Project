import React from 'react';

const Notebook = () => {
    return (
        <section className="wrapper">
            <div className="block">
                <div className="ui vertical center aligned segment nav-push middle-aligned">
                    <div className="ui container">
                        <h2 className="ui header">
                            My Notebook
                        </h2>

                        <div className="ui two column grid">
                            
                            <div className="column">
                                <div className="card notebook-card">
                                    <a href="/notebook/workhours">
                                            <div className="card-content">
                                                <p>Work Hours</p>
                                                {/* <img src={notebookIcon} className="section-icon" /> */}
                                            </div>
                                        </a>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card notebook-card">
                                    <a href="/notebook/payments">
                                            <div className="card-content">
                                                <p>Payments</p>
                                                {/* <img src={notebookIcon} className="section-icon" /> */}
                                            </div>
                                        </a>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card notebook-card">
                                    <a href="/notebook/goals">
                                            <div className="card-content">
                                                <p>Goals</p>
                                                {/* <img src={notebookIcon} className="section-icon" /> */}
                                            </div>
                                        </a>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card notebook-card">
                                    <a href="/notebook/notes">
                                            <div className="card-content">
                                                <p>Notes</p>
                                                {/* <img src={notebookIcon} className="section-icon" /> */}
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

export default Notebook;
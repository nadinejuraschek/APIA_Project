import React from 'react';

const HostFamily = () => {
    return (
        <section className="wrapper">
            <div className="block">
                <div className="ui vertical center aligned segment nav-push middle-aligned">
                    <div className="ui container">
                        <h2 className="ui header">
                            My Host Family
                        </h2>

                        <div className="ui two column grid">
                            
                            <div className="column">
                                <div className="ui card notebook-card">
                                    <div className="content">
                                        <div className="ui medium header">
                                            <a href="/notebook/workhours">Info</a>
                                        </div>
                                        <div className="meta">
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui card notebook-card">
                                    <div className="content">
                                        <div className="ui medium header">
                                            <a href="/notebook/payment">Diary</a>
                                        </div>
                                        <div className="meta">
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui card notebook-card">
                                    <div className="content">
                                        <div className="ui medium header">
                                            <a href="/notebook/goals">Tips</a>
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
            </div>
        </section>
    );
};

export default HostFamily;
import React from 'react';

const Notebook = () => {
    return (
        <section className="hero is-fullheight-with-navbar is-bold">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-half">
                        <a href="/notebook/workhours">
                            <div className="card notebook-card">
                            My Work Hours
                            </div>
                        </a>
                    </div>
                    <div className="column is-half">
                        <a href="/notebook/goals">
                            <div className="card notebook-card">
                            My Goals
                            </div>
                        </a>
                    </div>
                    <div className="column is-half">
                        <a href="/notebook/payments">
                            <div className="card notebook-card">
                            My Payments
                            </div>
                        </a>
                    </div>
                    <div className="column is-half">
                        <a href="/notebook/notes">
                            <div className="card notebook-card">
                            My Notes
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notebook;
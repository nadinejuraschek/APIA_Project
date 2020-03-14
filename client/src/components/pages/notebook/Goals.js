import React from 'react';
import GoalList from './GoalList';

import Header from '../../Header';

const Goals = () => {
    return (
        <section className="wrapper">
            <div className="block">
                <Header header="My Goals" />

                <div className="ui stackable grid">
                        
                    <GoalList />

                    <div className="wide row centered">
                        <div className="ui form">
                            <div className="ui action input">
                                <input 
                                type="text"
                                name="text"
                                // onChange={handleChange} 
                                placeholder="New Goal" 
                                />
                                <button className="ui icon button">
                                    <i className="plus icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
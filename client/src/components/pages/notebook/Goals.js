import React, { useContext } from 'react';
import GoalList from './GoalList';

import { GoalContext } from '../../../contexts/GoalContext';

import Header from '../../Header';

const Goals = () => {
    const [ goals, useGoals ] = useContext(GoalContext);

    return (
        <section className="wrapper">
            <div className="block">
                <Header header="My Goals" />

                <div className="ui stackable grid">
                    <div className="four column row">
                        <div className="column">
                            <div className="ui medium header">
                                3 Months
                            </div>
                            <div className="ui list">
                                <div className="item">
                                    <div className="header">
                                        Personal
                                    </div>
                                        {/* {goals.map((goal, index) => (
                                            if (goal.month === 3) {
                                                <GoalList key={index} text={goal.text} />
                                            } else if (goal.month === 6) {
                                                <GoalList key={index} text={goal.text} />
                                            } else if (goal.month === 9) {
                                                <GoalList key={index} text={goal.text} />
                                            } else if (goal.month === 12) {
                                                 <GoalList key={index} text={goal.text} />
                                            };
                                        S)} */}
                                    </div>
                                    <div className="item">
                                        <div className="header">
                                            Travel
                                        </div>
                                        <GoalList value={goals}/>
                                    </div>
                                    <div className="item">
                                        <div className="header">
                                            Education
                                        </div>
                                        <GoalList value={goals}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui medium header">
                                    6 Months
                                </div>
                            </div>
                    {/* </div>
                        <div className="two column row"> */}
                            <div className="column">
                                <div className="ui medium header">
                                    9 Months
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui medium header">
                                    12 Months
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
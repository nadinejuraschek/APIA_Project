import React, { useContext } from 'react';
import GoalItem from './GoalItem';

import { GoalContext } from '../../../contexts/GoalContext';

const GoalList = () => {
    const [ goals, useGoals ] = useContext(GoalContext);

    return (
        <div className="wide row">
            <div className="ui medium header">
                3 Months
            </div>
            
            <div className="ui stackable grid">
                <div className="three column row">
                    
                    <div className="column">
                        <div className="header">
                            Personal
                        </div>

                        <div className="ui list">
                            <div className="item">
                                <GoalItem value={goals}/>
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
                        </div>
                    </div>

                    <div className="column">
                        <div className="header">
                            Travel
                        </div>
                        <div className="ui list">
                            <div className="item">
                                <GoalItem value={goals}/>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="header">
                            Education
                        </div>
                        <div className="ui list">
                            <div className="item">
                                    <GoalItem value={goals}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>                                               
    );
};

export default GoalList;
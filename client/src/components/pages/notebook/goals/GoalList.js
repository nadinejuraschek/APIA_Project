// REACT
import React, { useContext } from 'react';

// COMPONENTS
import GoalItem from './GoalItem';

import { GoalContext } from '../../../../contexts/GoalContext';

const GoalList = () => {
    const { goals, getGoals, deleteGoal } = useContext(GoalContext);

    var three = [];
    var six = [];
    var nine = [];
    var twelve = [];

    for (let i=0; i < goals.length; i++) {
        if (goals[i].month === 3) {
            three.push(goals[i]);
        } else if (goals[i].month === 6) {
            six.push(goals[i]);
        } else if (goals[i].month === 9) {
            nine.push(goals[i]);
        } else if (goals[i].month === 12) {
            twelve.push(goals[i]);
        }
    };

    return (
        <>  
            <div className="custom-container">
                {/* <div className="ui dividing header">
                    Personal
                </div>
                <div className="custom-container"> */}
                <div className="ui list">
                    {goals.map((goal) => (
                        <GoalItem key={goal._id} goalid={goal._id} text={goal.text} deleteGoal={deleteGoal} />
                    ))}
                </div>
                {/* </div> */}
            </div>
            {/* <div className="custom-container">
                <div className="ui dividing header">
                    Travel
                </div>
                <div className="custom-container">
                    <div className="ui card">
                        <div className="ui list">
                            {goals.map((goal) => (
                                <GoalItem key={goal._id} goalid={goal._id} text={goal.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-container">
                <div className="ui dividing header">
                    Education
                </div>
                <div className="custom-container">
                    <div className="ui card">
                        <div className="ui list">
                            {goals.map((goal) => (
                                <GoalItem key={goal._id} goalid={goal._id} text={goal.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
        </>   
    );
};

export default GoalList;
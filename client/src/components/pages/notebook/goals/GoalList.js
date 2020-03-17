// REACT
import React, { useContext } from 'react';

// COMPONENTS
import GoalItem from './GoalItem';

import { GoalContext } from '../../../../contexts/GoalContext';

const GoalList = props => {
    const { goals, getGoals } = useContext(GoalContext);

    const threePers = [];
    const sixPers = [];
    const ninePers = [];
    const twelvePers = [];

    const threeTrav = [];
    const sixTrav = [];
    const nineTrav = [];
    const twelveTrav = [];

    const threeEdu = [];
    const sixEdu = [];
    const nineEdu = [];
    const twelveEdu = [];

    for (let i=0; i < goals.length; i++) {
        if (goals[i].month === 3 && goals[i].type === 'personal') {
            threePers.push(goals[i]);
        } else if (goals[i].month === 6 && goals[i].type === 'personal') {
            sixPers.push(goals[i]);
        } else if (goals[i].month === 9 && goals[i].type === 'personal') {
            ninePers.push(goals[i]);
        } else if (goals[i].month === 12 && goals[i].type === 'personal') {
            twelvePers.push(goals[i]);
        } else if (goals[i].month === 3 && goals[i].type === 'travel') {
            threeTrav.push(goals[i]);
        } else if (goals[i].month === 6 && goals[i].type === 'travel') {
            sixTrav.push(goals[i]);
        } else if (goals[i].month === 9 && goals[i].type === 'travel') {
            nineTrav.push(goals[i]);
        } else if (goals[i].month === 12 && goals[i].type === 'travel') {
            twelveTrav.push(goals[i]);
        } else if (goals[i].month === 3 && goals[i].type === 'education') {
            threeEdu.push(goals[i]);
        } else if (goals[i].month === 6 && goals[i].type === 'education') {
            sixEdu.push(goals[i]);
        } else if (goals[i].month === 9 && goals[i].type === 'education') {
            nineEdu.push(goals[i]);
        } else if (goals[i].month === 12 && goals[i].type === 'education') {
            twelveEdu.push(goals[i]);
        };
    };

    return (
        <>  
            <div className="custom-container">
                <div className="ui dividing header">
                    Personal
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
            </div>
        </>   
    );
};

export default GoalList;
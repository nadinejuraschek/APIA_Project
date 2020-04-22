// REACT
import React, { useContext } from 'react';

// COMPONENTS
import GoalItem from './GoalItem';

// CONTEXT
import { GoalContext } from '../../../../contexts/GoalContext';

const GoalList = () => {
    const { goals, getGoals, deleteGoal } = useContext(GoalContext);

    return (
        <>  
            <div className="custom-container">
                {/* <div className="ui dividing header">
                    Personal
                </div>
                <div className="custom-container"> */}
                <div className="ui list">
                    {goals.map((goal) => (
                        <GoalItem key={goal._id} goalid={goal._id} goal={goal} deleteGoal={deleteGoal} getGoals={getGoals} />
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
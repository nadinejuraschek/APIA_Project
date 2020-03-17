import React, { useContext } from 'react';
import GoalItem from './GoalItem';

import { GoalContext } from '../../../../contexts/GoalContext';

const GoalList = () => {
    const [ goals, useGoals ] = useContext(GoalContext);

    return (
        <>  
            <div className="custom-container">
                <div className="ui dividing header">
                    Personal
                </div>
                <div className="custom-container">
                    <div className="ui card">
                        <div className="ui list">
                            <GoalItem value={goals} />
                        </div>
                    </div>
                </div>
            </div>
                {/* {goals.map((goal, index) => (
                    (goal.month === 3) ?
                    <GoalList key={index} text={goal.text} />
                    } else if (goal.month === 6) {
                    <GoalList key={index} text={goal.text} />
                    } else if (goal.month === 9) {
                    <GoalList key={index} text={goal.text} />
                    } else if (goal.month === 12) {
                    <GoalList key={index} text={goal.text} />
                    }; */}
                {/* )} */}
        </>   
    );
};

export default GoalList;
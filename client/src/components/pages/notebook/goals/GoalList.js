// REACT
import React, { useContext } from 'react';

// COMPONENTS
import GoalItem from './GoalItem';

import { GoalContext } from '../../../../contexts/GoalContext';

const GoalList = props => {
    const { goals, getGoals } = useContext(GoalContext);

    const threeList = () => {
        console.log('Goals in GoalList: ' + props.goals);
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
                            {/* { goals.map(goal => {
                                if (goal.month === 3 && goal.type === 'personal')
                                    return <GoalItem key={goal._id} text={goal.text} />
                            })}; */}
                            {/* <GoalItem value={goals} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>   
    );
};

export default GoalList;
// REACT
import React from 'react';

// SEMANTIC UI
import { Checkbox } from 'semantic-ui-react'

const GoalItem = ({ goalid, text, deleteGoal }) => {
    return (
        <div className="item">
            <div>
                <Checkbox className="list-check" label={text} />
                <span>
                    <button className="no-style-button" onClick={() => deleteGoal(goalid)}><i className="close icon"></i></button>
                </span>
            </div>
        </div>
    );
};

export default GoalItem;
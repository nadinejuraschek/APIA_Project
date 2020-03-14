import React from 'react';

const GoalItem = ({ month, text }) => {
    return (
        <div className="ui list">
            <div className="item">
                {text}
            </div>
            <div className="item">
                {text}
            </div>
            <div className="item">
                {text}
            </div>
        </div>
    );
};

export default GoalItem;
import React from 'react';

const GoalItem = ({ month, text }) => {
    return (
        <div className="item">
            {text}
        </div>
    );
};

export default GoalItem;
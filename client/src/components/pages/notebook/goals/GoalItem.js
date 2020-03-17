import React from 'react';

const GoalItem = ({ text }) => {
    return (
        <div className="item">
            <div className="ui checkbox">
                {text}
            </div>
        </div>
    );
};

export default GoalItem;
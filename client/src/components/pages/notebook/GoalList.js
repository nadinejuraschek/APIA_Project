import React from 'react';

const GoalList = ({ text }) => {
    return (
        <div className="ui list">
            <button className="circular ui icon button"><i class="plus icon"></i></button>
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

export default GoalList;
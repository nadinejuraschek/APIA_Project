import React from 'react';

const GoalList = () => {
    return (
        <div className="ui list">
            <button className="circular ui icon button"><i class="plus icon"></i></button>
            <div className="item">
                Goal #1
            </div>
            <div className="item">
                Goal #2
            </div>
            <div className="item">
                Goal #3
            </div>
        </div>
    );
};

export default GoalList;
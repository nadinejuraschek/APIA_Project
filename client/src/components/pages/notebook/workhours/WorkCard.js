import React from 'react';

const WorkCard = ({ workhourid, week, weeklyHours }) => {
    
    return (
        <div className="column">
                <div className="ui fluid card centered">
                    <div className="content">
                        <div className="header">
                            Week {week}
                        </div>
                    </div>
                    <div className="content">
                        {weeklyHours} hours
                    </div>
                </div>
        </div>
    );
};

export default WorkCard;
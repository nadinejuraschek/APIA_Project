// REACT
import React, { useState } from 'react';

// COMPONENTS
import WeekView from './WeekView';

const WorkCard = ({ workhour }) => {
    const [ selected, setSelected] = useState(false);

    const showWeek = () => {
        selected == true ? setSelected(false) : setSelected(true);
    };
    
    return (
        <div className="ui fluid card centered">
            <div className="content">
                <div className="header">
                    Week {workhour.number}
                </div>
            </div>
            <div className="content">
                <strong>{workhour.weeklyHours} hours</strong>
                <div className="button-container">
                    <button
                        className="ui button activity-button"
                        onClick={() => showWeek()}
                    >
                        Show Details
                    </button>
                </div>
            </div>
            <div className={selected ? '' : 'hide'}>
                <WeekView workhour={workhour} />
            </div>
        </div>
    );
};

export default WorkCard;
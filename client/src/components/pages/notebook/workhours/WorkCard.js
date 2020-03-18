// REACT
import React, { useState } from 'react';

// COMPONENTS
import WeekView from './WeekView';

const WorkCard = ({ workhour }) => {
    const [ selected, setSelected] = useState(false);
    let weekly = 0;

    const showWeek = () => {
        selected == true ? setSelected(false) : setSelected(true);
    };

    const calcWeek = () => {
        const days = workhour.day;
        let totalHours = [];
        // let weekly = 0;
        // push all daily hours to array
        for (let i=0; i < days.length; i++) {
            totalHours.push(days[i].dailyHours);
        };
        // add all daily hours
        for (let n=0; n < totalHours.length; n++) {
            weekly = weekly + totalHours[n];
        };
        
        console.log('Calculated Hours: ' + weekly);
        
        // push to database
        // axiso update
        // change output to database output
        return weekly
    };

    calcWeek();
    
    return (
        <div className="ui fluid card centered">
            <div className="content">
                <div className="header">
                    Week {workhour.number}
                </div>
            </div>
            <div className="content">
                <strong>{weekly} hours</strong>
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
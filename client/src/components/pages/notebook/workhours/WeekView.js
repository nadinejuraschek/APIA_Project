// REACT
import React from 'react';

// COMPONENTS
import WeeklyTable from './WeeklyTable';
import AddDay from './AddDay';

const WeekView = ({ workhour, workhourid }) => {

    return (
        <div className="custom-container">
            <WeeklyTable workhour={workhour} />
            <AddDay workhour={workhour} workhourid={workhourid} />
        </div>
    );

};

export default WeekView;
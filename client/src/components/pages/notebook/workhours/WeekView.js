import React from 'react';

import WeeklyTable from './WeeklyTable';
import AddDay from './AddDay';

const WeekView = ({ workhours, deleteWorkhours }) => {
    return (
        <div>
            <div className="custom-container">
                <WeeklyTable workhours={workhours} deleteWorkhours={deleteWorkhours} />
            </div>
                <AddDay />
            <div className="ui divider"></div>
        </div>
    );
};

export default WeekView;
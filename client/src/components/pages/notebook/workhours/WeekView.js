import React from 'react';

import WeeklyTable from './WeeklyTable';
import AddDay from './AddDay';

const WeekView = () => {
    return (
        <div>
            <div className="custom-container">
                <WeeklyTable />
            </div>
            <AddDay />
            <div className="ui divider"></div>
        </div>
    );
};

export default WeekView;
// REACT
import React, { useState, useEffect } from 'react';

// COMPONENTS
import WeeklyTable from './WeeklyTable';
import AddDay from './AddDay';

const WeekView = ({ workhour, deleteWorkhours }) => {

    return (
        <div className="custom-container">
            <WeeklyTable 
                workhour={workhour} 
                // deleteWorkhours={deleteWorkhours} 
            />
            <AddDay workhour={workhour} />
            <div className="ui divider"></div>
        </div>
    );
};

export default WeekView;
// REACT
import React, { useState, useEffect } from 'react';

// COMPONENTS
import WeeklyTable from './WeeklyTable';
import AddDay from './AddDay';

const WeekView = ({ workhour, workhourid, deleteWorkhours }) => {

    return (
        <div className="custom-container">
            <WeeklyTable 
                workhour={workhour} 
                // deleteWorkhours={deleteWorkhours} 
            />
            <AddDay workhour={workhour} workhourid={workhourid} deleteWorkhours={deleteWorkhours} />
        </div>
    );
};

export default WeekView;
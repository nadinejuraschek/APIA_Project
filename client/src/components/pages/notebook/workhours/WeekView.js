// REACT
import React, { useState } from 'react';

// COMPONENTS
import WeeklyTable from './WeeklyTable';
import EditWeek from './EditWeek';

const WeekView = ({ workhour, getWorkhours, getWeek, workhourid }) => {
    const [ show, setShow ] = useState(false);

    const showEdit = () => {
        show === true ? setShow(false) : setShow(true);
    };

    return (
        <div className="custom-container">
            <div className="right floated meta">
                <button 
                    type="button"
                    className="no-style-button"
                    onClick={() => showEdit()}
                >
                    <i className="edit outline light icon"></i>
                </button>
            </div>
            <WeeklyTable workhour={workhour} />
            <div className={show === true ? '' : 'hide'}>
                <EditWeek workhour={workhour} workhourid={workhourid} getWorkhours={getWorkhours} getWeek={getWeek} />
            </div>
        </div>
    );

};

export default WeekView;
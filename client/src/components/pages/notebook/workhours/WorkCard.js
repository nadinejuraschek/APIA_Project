// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import WeekView from './WeekView';

const WorkCard = ({ workhour, workhourid, deleteWorkhours, getWeek, getWorkhours }) => {
    const [ selected, setSelected] = useState(false);
    const [ show, setShow ] = useState(false);
    let weekly = 0;

    const showWeek = () => {
        selected === true ? setSelected(false) : setSelected(true);
    };

    const showEdit = () => {
        show === true ? setShow(false) : setShow(true);
    };

    const calcWeek = () => {
        const days = [workhour.mon, workhour.tue, workhour.wed, workhour.thu, workhour.fri, workhour.sat, workhour.sun];
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
        
        // console.log('Calculated Hours: ' + weekly);
        
        // push to database
        // axios update
        axios.put('/api/workhours/' + workhourid, { weeklyHours: weekly })
        .then(res => {
            // console.log(res.data);
            console.log('Calculated Weekly Hours in DB: ' + res.data);
        }).catch(error => {
            console.log('Error: ' + error.response);
        });

        // change output to database output
        return weekly
    };

    calcWeek();
    
    return (
        <div className="ui fluid card centered">
            <div className="content">
                <div className="header">
                    <div className="right floated meta">
                        <button className="no-style-button">
                            <i className="trash light small icon" onClick={() => deleteWorkhours(workhourid)}></i>
                        </button>
                    </div>
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
                        {selected == true ? 'Hide Details' : 'Show Details' }
                    </button>
                </div>
            </div>
            <div className={selected ? '' : 'hide'}>
                <WeekView 
                    workhourid={workhourid} 
                    workhour={workhour} 
                    getWorkhours={getWorkhours}
                    getWeek={getWeek} 
                />
            </div>
        </div>
    );
};

export default WorkCard;
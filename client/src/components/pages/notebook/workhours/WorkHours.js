// REACT
import React, { useState, useContext } from 'react';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import Header from '../../../Header';
import WorkCard from './WorkCard';

// CONTEXT
import { WorkHourContext } from '../../../../contexts/WorkHourContext';

const WorkHours = (props) => {
    const { workhours, getWorkhours, deleteWorkhours } = useContext(WorkHourContext);
    const emptyDays = [
        {
            date: '', 
            dailyHours: 0, 
            dayOff: false 
        },
        {
            date: '', 
            dailyHours: 0, 
            dayOff: false 
        },
        {
            date: '', 
            dailyHours: 0, 
            dayOff: false 
        },
        {
            date: '', 
            dailyHours: 0, 
            dayOff: false 
        },
        {
            date: '', 
            dailyHours: 0, 
            dayOff: false 
        },
        {
            date: '', 
            dailyHours: 0, 
            dayOff: false 
        },
        {
            date: '', 
            dailyHours: 0, 
            dayOff: false 
        }
    ];
    const [ newHours, setNewHours ] = useState({ 
        number: 0, 
        day: emptyDays, 
        weeklyHours: 0 
    });

    const handleSubmit = event => {
        event.preventDefault();
        // console.log('WorkHours sent to DB: ' + newHours);
        axios({
            url: '/api/workhours',
            method: 'POST',
            data: newHours
        }).then(response => {
            // console.log('WorkHours in DB: ' + response.data);
            getWorkhours();
        }).catch(error => {
            console.log('Error: ' + error)
        });
    };

    const handleChange = event => {
        const name =  event.target.name;
        const value = event.target.value;
        setNewHours(newHours => ({...newHours, [name]: value}));
    };

    return (
        <section className="wrapper-scroll">
            <div className="block">
                    
                <Header header="Your Work Hours" />

                <div className="custom-container">
                    <div className="ui stackable grid">
                        <div className="five column row">
                            {workhours.map((workhour) => (
                                <WorkCard 
                                    key={workhour._id} 
                                    workhourid={workhour._id} 
                                    workhour={workhour} 
                                    deleteWorkhours={deleteWorkhours}
                                    getWorkhours={getWorkhours}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="centered">
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="field">
                            <input 
                                name="number" 
                                type="number" 
                                min="1" max="52" 
                                placeholder="Week #"
                                onChange={handleChange}
                            />
                        </div>
                        <button className="circular ui icon button"><i className="plus icon"></i></button>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default WorkHours;
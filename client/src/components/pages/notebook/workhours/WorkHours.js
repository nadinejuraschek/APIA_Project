import React, { useState, useContext } from 'react';
import axios from 'axios';
// import { Accordion, Icon } from 'semantic-ui-react';

import Header from '../../../Header';
// import WorkAccordion from './WorkAccordion';
import WorkCard from './WorkCard';
import WeekView from './WeekView';

import { WorkHourContext } from '../../../../contexts/WorkHourContext';

const WorkHours = () => {
    const { workhours } = useContext(WorkHourContext);
    const [ newHours, setNewHours ] =  useState({ number: 0 });

    const handleSubmit = event => {
        event.preventDefault();
        console.log('WorkHours sent to DB: ' + newHours);
        axios({
            url: '/api/workhours',
            method: 'POST',
            data: newHours
        }).then(response => {
            console.log('WorkHours in DB: ' + response.data);
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

                <WeekView />

                <div className="ui stackable grid">
                    <div className="five column row">
                        {/* <WorkCard workhourid={workhours._id} value={workhours} /> */}
                        {/* <WorkCard workhourid={workhours._id} value={workhours} /> */}
                    </div>
                </div>

                <div className="ui dividing header">Add A Week</div>
                <div className="centered">
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="ui action input">
                            <input 
                                name="number" 
                                type="number" 
                                min="1" max="52" 
                                placeholer="Week #"
                                onChange={handleChange}
                            />
                            <button className="ui icon button"><i class="plus icon"></i></button>
                        </div>
                    </form>
                </div>
                
            </div>
        </section>
        );
    // }
};

export default WorkHours;
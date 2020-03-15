import React, { useState, useContext } from 'react';
// import { Accordion, Icon } from 'semantic-ui-react';

import Header from '../../../Header';
// import WorkAccordion from './WorkAccordion';
import WorkCard from './WorkCard';
import WeekView from './WeekView';

import { WorkHourContext } from '../../../../contexts/WorkHourContext';

const WorkHours = () => {
    const [ workhours, setWorkhours ] = useContext(WorkHourContext);
    const [ activeCard, setActiveCard ] = useState({});

    return (
        <section className="wrapper">
            <div className="block">
                    
                <Header header="Your Work Hours" />

                <WeekView value={workhours} />

                <div className="ui stackable grid">
                    <div className="five column row">
                        <WorkCard workhourid={workhours._id} value={workhours} />
                        <WorkCard workhourid={workhours._id} value={workhours} />
                    </div>
                </div>

                <div className="centered">
                    <button className="circular ui icon button"><i class="plus icon"></i></button>
                </div>
            </div>
        </section>
        );
    // }
};

export default WorkHours;
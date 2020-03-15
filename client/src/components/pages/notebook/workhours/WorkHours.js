import React, { useContext } from 'react';
// import { Accordion, Icon } from 'semantic-ui-react';

import Header from '../../../Header';
// import WorkAccordion from './WorkAccordion';
import WorkCard from './WorkCard';

import { WorkHourContext } from '../../../../contexts/WorkHourContext';

const WorkHours = () => {
    const [ workhours, setWorkhours ] = useContext(WorkHourContext);
    // state = { activeIndex: 0 }

    // handleClick = (e, titleProps) => {
    //     const { index } = titleProps
    //     const { activeIndex } = this.state
    //     const newIndex = activeIndex === index ? -1 : index

    //     this.setState({ activeIndex: newIndex })
    // }
    // render() {
    //     const { activeIndex } = this.state;

        
        return (
            <section className="wrapper">
                <div className="block">
                    
                    <Header header="Your Work Hour Log" />

                    <div className="ui stackable grid">
                        <div className="five column row">
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                        </div>
                        <div className="five column row">
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                        </div>
                        <div className="five column row">
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                        </div>
                        <div className="five column row">
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                        </div>
                        <div className="five column row">
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                        </div>
                        <div className="five column row">
                            <WorkCard value={workhours} />
                            <WorkCard value={workhours} />
                        </div>
                    </div>
                </div>
            </section>
        );
    // }
};

export default WorkHours;
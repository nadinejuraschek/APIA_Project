import React from 'react';

import WeeklyTable from './WeeklyTable';

const WorkAccordion = () => {
    return (
<Accordion className="accordion ui styled">

                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Week 1
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <WeeklyTable />
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 1}
                                index={1}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Week 2
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <WeeklyTable />
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 2}
                                index={2}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Week 3
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <WeeklyTable />
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 4}
                                index={4}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                Week 4
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <WeeklyTable />
                            </Accordion.Content>

                        </Accordion>
    );
};

export default WorkAccordion;
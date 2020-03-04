import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

class WorkHours extends Component {
    render() {
        return (
            <section className="hero is-fullheight-with-navbar is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <Accordion>
                            {[1, 2, 3, 4, 5].map(item => {
                            return (
                                <AccordionItem title={`Item ${item}`} expanded={item === 1}>
                                <div>
                                    {`Item ${item} content`}
                                </div>
                                </AccordionItem>
                            );
                            })}
                        </Accordion>
                    </div>
                </div>
            </section>
        );
    }
};

export default WorkHours;
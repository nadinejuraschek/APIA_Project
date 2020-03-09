import React from 'react';

import FeatureCard from '../FeatureCard';

import hoursIcon from '../../../images/hours.svg';
import paymentIcon from '../../../images/payment.svg';
import goalIcon from '../../../images/goal.svg';
import notesIcon from '../../../images/note.svg';

const Notebook = () => {
    return (
        <section className="wrapper">
            <div className="block">
                <div className="ui vertical center aligned segment nav-push middle-aligned">
                    <div className="ui container">
                        <h2 className="ui header">
                            My Notebook
                        </h2>

                        <div className="ui two column stackable grid">
                            
                            <div className="column">
                                <FeatureCard 
                                    title="workhours" 
                                    header="Work Hours" 
                                    icon={hoursIcon} 
                                    link="/notebook/workhours"  
                                />
                            </div>

                            <div className="column">
                                <FeatureCard 
                                    title="payment" 
                                    header="Payments" 
                                    icon={paymentIcon} 
                                    link="/notebook/payments" 
                                />
                            </div>

                            <div className="column">
                                <FeatureCard 
                                    title="goals" 
                                    header="Goals" 
                                    icon={goalIcon} 
                                    link="/notebook/goals" 
                                />
                            </div>

                            <div className="column">
                                <FeatureCard 
                                    title="notes" 
                                    header="Notes" 
                                    icon={notesIcon} 
                                    link="/notebook/notes" 
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notebook;
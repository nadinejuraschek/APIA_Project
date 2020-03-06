import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

class WorkHours extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    
    render() {
        const { activeIndex } = this.state;

        return (
            <section className="wrapper">
                <div className="block">
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
                            <table className="ui unstackable selectable very basic collapsing celled table">
                                {/* Header */}
                                <thead>
                                    <tr className="work-hour-tr">
                                        <th>Date</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th></th>
                                        <th>Daily Hours</th>
                                        <th>Weekly Hours</th>
                                        <th>Day Off?</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {/* Monday */}
                                    <tr>
                                        <td>03/02/2020</td>
                                        <td>6:00 AM</td>
                                        <td>2:00 PM</td>
                                        <td>8</td>
                                        <td>8</td>
                                        <td>41</td>
                                        <td></td>
                                    </tr>

                                    {/* Tuesday */}
                                    <tr>
                                        <td>03/03/2020</td>
                                        <td>6:00 AM</td>
                                        <td>2:00 PM</td>
                                        <td>8</td>
                                        <td>8</td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    {/* Wednesday */}
                                    <tr>
                                        <td>03/04/2020</td>
                                        <td>9:00 AM</td>
                                        <td>2:00 PM</td>
                                        <td>5</td>
                                        <td>7</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>6:00 PM</td>
                                        <td>8:00 PM</td>
                                        <td>2</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    {/* Thursday */}
                                    <tr>
                                        <td>03/05/2020</td>
                                        <td>6:00 AM</td>
                                        <td>2:00 PM</td>
                                        <td>8</td>
                                        <td>8</td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    {/* Friday */}
                                    <tr>
                                        <td>03/06/2020</td>
                                        <td>9:00 AM</td>
                                        <td>5:00 PM</td>
                                        <td>8</td>
                                        <td>8</td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    {/* Saturday */}
                                    <tr>
                                        <td>03/07/2020</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><i class="small green checkmark icon"></i></td>
                                    </tr>

                                    {/* Sunday */}
                                    <tr>
                                        <td>03/08/2020</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><i class="small green checkmark icon"></i></td>
                                    </tr>
                                </tbody>

                            </table>
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
                            <table className="ui selectable very basic collapsing celled table">
                                {/* Header */}
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th></th>
                                        <th>Daily Hours</th>
                                        <th>Weekly Hours</th>
                                        <th>Day Off?</th>
                                    </tr>
                                </thead>
                            </table>
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
                            <table className="ui selectable very basic collapsing celled table">
                                {/* Header */}
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th></th>
                                        <th>Daily Hours</th>
                                        <th>Weekly Hours</th>
                                        <th>Day Off?</th>
                                    </tr>
                                </thead>
                            </table>
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
                            <table className="ui selectable very basic collapsing celled table">
                                {/* Header */}
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th></th>
                                        <th>Daily Hours</th>
                                        <th>Weekly Hours</th>
                                        <th>Day Off?</th>
                                    </tr>
                                </thead>
                            </table>
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 5}
                            index={5}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            Week 5
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 5}>
                            <table className="ui selectable very basic collapsing celled table">
                                {/* Header */}
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th></th>
                                        <th>Daily Hours</th>
                                        <th>Weekly Hours</th>
                                        <th>Day Off?</th>
                                    </tr>
                                </thead>
                            </table>
                        </Accordion.Content>

                    </Accordion>
                </div>
            </section>
        );
    }
};

export default WorkHours;
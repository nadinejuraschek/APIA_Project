import React, { useState, createContext } from 'react';

export const WorkHourContext = createContext();

export const WorkHourProvider = props => {
    const [ workhours, setWorkhours ] = useState([
        {
            week: {
                number: 1,
                day: [
                    {
                        date: '02/03/2020',
                        time: [
                            {
                                start: '6:00 AM',
                                end: '2:00 PM',
                                totalHours: 8
                            }
                        ],
                        dailyHours: 8,
                        dayOff: false
                    },
                    {
                        date: '02/04/2020',
                        time: [
                            {
                                start: '6:00 AM',
                                end: '2:00 PM',
                                totalHours: 8
                            }
                        ],
                        dailyHours: 8,
                        dayOff: false
                    },{
                        date: '02/05/2020',
                        time: [
                            {
                                start: '9:00 AM',
                                end: '2:00 PM',
                                totalHours: 5
                            },
                            {
                                start: '6:00 AM',
                                end: '8:00 PM',
                                totalHours: 2
                            }
                        ],
                        dailyHours: 7,
                        dayOff: false
                    },{
                        date: '02/06/2020',
                        time: [
                            {
                                start: '6:00 AM',
                                end: '2:00 PM',
                                totalHours: 8
                            }
                        ],
                        dailyHours: 8,
                        dayOff: false
                    },{
                        date: '02/07/2020',
                        time: [
                            {
                                start: '9:00 AM',
                                end: '7:00 PM',
                                totalHours: 10
                            }
                        ],
                        dailyHours: 10,
                        dayOff: false
                    },
                    {
                        date: '02/08/2020',
                        time: [
                            {
                                start: '',
                                end: '',
                                totalHours: null
                            }
                        ],
                        dailyHours: null,
                        dayOff: true
                    },
                    {
                        date: '02/09/2020',
                        time: [
                            {
                                start: '',
                                end: '',
                                totalHours: null
                            }
                        ],
                        dailyHours: null,
                        dayOff: true
                    }
                ],
                weeklyHours: 43  
            },
            week: {
                number: 2,
                day: [
                    {
                        date: '02/10/2020',
                        time: [
                            {
                                start: '6:00 AM',
                                end: '2:00 PM',
                                totalHours: 8
                            }
                        ],
                        dailyHours: 8,
                        dayOff: false
                    },
                    {
                        date: '02/11/2020',
                        time: [
                            {
                                start: '6:00 AM',
                                end: '2:00 PM',
                                totalHours: 8
                            }
                        ],
                        dailyHours: 8,
                        dayOff: false
                    },{
                        date: '02/12/2020',
                        time: [
                            {
                                start: '9:00 AM',
                                end: '2:00 PM',
                                totalHours: 5
                            },
                            {
                                start: '4:00 AM',
                                end: '10:00 PM',
                                totalHours: 6
                            }
                        ],
                        dailyHours: 11,
                        dayOff: false
                    },{
                        date: '02/13/2020',
                        time: [
                            {
                                start: '6:00 AM',
                                end: '2:00 PM',
                                totalHours: 8
                            }
                        ],
                        dailyHours: 8,
                        dayOff: false
                    },{
                        date: '02/14/2020',
                        time: [
                            {
                                start: '9:00 AM',
                                end: '7:00 PM',
                                totalHours: 10
                            }
                        ],
                        dailyHours: 10,
                        dayOff: false
                    },
                    {
                        date: '02/15/2020',
                        time: [
                            {
                                start: '8:00 PM',
                                end: '10:00 PM',
                                totalHours: 2
                            }
                        ],
                        dailyHours: 2,
                        dayOff: false
                    },
                    {
                        date: '02/16/2020',
                        time: [
                            {
                                start: '',
                                end: '',
                                totalHours: null
                            }
                        ],
                        dailyHours: null,
                        dayOff: true
                    }
                ],
                weeklyHours: 43  
            }
        }
    ]);

    return (
        <WorkHourContext.Provider value={[workhours]}>
            {this.children}
        </WorkHourContext.Provider>
    )
};
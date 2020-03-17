import React, { useState, createContext } from 'react';

export const WorkHourContext = createContext();

export const WorkHourProvider = (props) => {
    const [ workhours, setWorkhours ] = useState([
        {
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
        }
    ]);

    return (
        <WorkHourContext.Provider value={workhours}>
            {props.children}
        </WorkHourContext.Provider>
    )
};
import React, { useState, useEffect, createContext } from 'react';

import axios from 'axios';

export const WorkHourContext = createContext();

export const WorkHourProvider = (props) => {
    const [ workhours, setWorkhours ] = useState([]);
    const [ week, setWeek ] = useState({});

    useEffect( () => {
        getWorkhours();
    }, []);

    const getWorkhours = () => {
        axios({
            url: '/user/:id/workhours',
            method: 'GET'
        }).then(res => {
            // console.log(res.data.workhours);
            setWorkhours(res.data.workhours);
        });
    };

    const getWeek = (workhourid) => {
        axios({
            url: '/api/workhours/' + workhourid,
            method: 'GET'
        }).then(res => {
            // console.log(res.data.workhours);
            setWeek(res.data);
        });
    };

    const deleteWorkhours = (workhourid) => {
        axios.delete('/api/workhours/' + workhourid)
        .then(res => {
            console.log(res);
            getWorkhours();
        });
    };

    return (
        <WorkHourContext.Provider value={ { workhours, getWorkhours, getWeek, deleteWorkhours } }>
            {props.children}
        </WorkHourContext.Provider>
    )
};
import React, { useState, useEffect, createContext } from 'react';

import axios from 'axios';

export const WorkHourContext = createContext();

export const WorkHourProvider = (props) => {
    const [ workhours, setWorkhours ] = useState([]);

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

    const deleteWorkhours = (workhourid) => {
        axios.delete('/api/workhours/' + workhourid)
        .then(res => {
            console.log(res);
            getWorkhours();
        });
    };

    return (
        <WorkHourContext.Provider value={ { workhours, getWorkhours, deleteWorkhours } }>
            {props.children}
        </WorkHourContext.Provider>
    )
};
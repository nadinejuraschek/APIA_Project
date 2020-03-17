// REACT
import React, { useState, createContext, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

export const GoalContext = createContext();

export const GoalProvider = props => {

    const [ goals, setGoals ] = useState([]); 

    useEffect( () => { 
        getGoals();
    }, []);

    const getGoals = () => {
        axios({
            url: '/user/:id/goals',
            method: 'GET'
        }).then(res => {
            // console.log(res.data.goals);
            setGoals(res.data.goals);
        });
    };

    return (
        <GoalContext.Provider value={ { goals, getGoals } }>
            {props.children}
        </GoalContext.Provider>
    );
};
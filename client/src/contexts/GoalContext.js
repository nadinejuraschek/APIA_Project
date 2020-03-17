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
            method: 'GET',
            url: '/user/:id/goals'
        }).then(res => {
            setGoals(res.data.goals);
            console.log(res.data.goals);
        });
    };

    return (
        <GoalContext.Provider value={ { goals, getGoals } }>
            {props.children}
        </GoalContext.Provider>
    );
};
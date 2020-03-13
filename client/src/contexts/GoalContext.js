import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const GoalContext = createContext();

export const GoalProvider = props => {

    const [ goals, setGoals ] = useState([]); 

    useEffect( () => { 
        axios({
            method: 'GET',
            url: '/user/:id/goals'
        }).then(res => {
            setGoals(res.data.goals);
        })
    }, []);

    return (
        <GoalContext.Provider value={[goals]}>
            {props.children}
        </GoalContext.Provider>
    );
};
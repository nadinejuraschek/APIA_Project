import React, { useState, createContext } from 'react';

export const GoalContext = createContext();

export const GoalProvider = props => {
    const [ goals, setGoals ] = useState({
        three: {
            personal: [],
            travel: [],
            education: []
        },
        six: {
            personal: [],
            travel: [],
            education: []
        },
        nine: {
            personal: [],
            travel: [],
            education: []
        },
        twelve: {
            personal: [],
            travel: [],
            education: []
        }
    });

    return (
        <GoalContext.Provider value={goals}>
            {props.children}
        </GoalContext.Provider>
    );
};
import React, { useState, createContext } from 'react';

export const GoalContext = createContext();

export const GoalProvider = props => {
    const [ goals, setGoals ] = useState({
        personal: [
            {
                month: 3,
                text: 'This is my goal!'
            },
            {
                month: 6,
                text: 'This is my goal!'
            }
        ],
        travel: [
            {
                month: 6,
                text: 'This is my goal!'
            }
        ],
        education: [
            {
                month: 12,
                text: 'This is my goal!'
            }
        ]
    });

    return (
        <GoalContext.Provider value={[goals]}>
            {props.children}
        </GoalContext.Provider>
    );
};
// REACT
import React, { useState, createContext, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// CONTEXT
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

            // sorting goals
            // var threePers = [];
            // var sixPers = [];
            // var ninePers = [];
            // var twelvePers = [];

            // var threeTrav = [];
            // var sixTrav = [];
            // var nineTrav = [];
            // var twelveTrav = [];

            // var threeEdu = [];
            // var sixEdu = [];
            // var nineEdu = [];
            // var twelveEdu = [];

            // for (let i=0; i < goals.length; i++) {
            //     if (goals[i].month === 3 && goals[i].type === 'personal') {
            //         console.log('Personal Goal!' + goals[i]);
            //         threePers.push(goals[i]);
            //     } else if (goals[i].month === 6 && goals[i].type === 'personal') {
            //         sixPers.push(goals[i]);
            //     } else if (goals[i].month === 9 && goals[i].type === 'personal') {
            //         ninePers.push(goals[i]);
            //     } else if (goals[i].month === 12 && goals[i].type === 'personal') {
            //         twelvePers.push(goals[i]);
            //     } else if (goals[i].month === 3 && goals[i].type === 'travel') {
            //         threeTrav.push(goals[i]);
            //     } else if (goals[i].month === 6 && goals[i].type === 'travel') {
            //         sixTrav.push(goals[i]);
            //     } else if (goals[i].month === 9 && goals[i].type === 'travel') {
            //         nineTrav.push(goals[i]);
            //     } else if (goals[i].month === 12 && goals[i].type === 'travel') {
            //         twelveTrav.push(goals[i]);
            //     } else if (goals[i].month === 3 && goals[i].type === 'education') {
            //         threeEdu.push(goals[i]);
            //     } else if (goals[i].month === 6 && goals[i].type === 'education') {
            //         sixEdu.push(goals[i]);
            //     } else if (goals[i].month === 9 && goals[i].type === 'education') {
            //         nineEdu.push(goals[i]);
            //     } else if (goals[i].month === 12 && goals[i].type === 'education') {
            //         twelveEdu.push(goals[i]);
            //     };
            // };

            // console.log(allGoals);

            // var three = [];
            // var six = [];
            // var nine = [];
            // var twelve = [];

            // for (let i=0; i < goals.length; i++) {
            //     if (goals[i].month === 3) {
            //         three.push(goals[i]);
            //     } else if (goals[i].month === 6) {
            //         six.push(goals[i]);
            //     } else if (goals[i].month === 9) {
            //         nine.push(goals[i]);
            //     } else if (goals[i].month === 12) {
            //         twelve.push(goals[i]);
            //     }
            // };
            setGoals(res.data.goals);
        });
    };

    const deleteGoal = (goalid) => {
        axios.delete('/api/goals/' + goalid)
            .then(res => {
                console.log(res);
                getGoals();
            });
    };

    return (
        <GoalContext.Provider value={ { goals, getGoals, deleteGoal } }>
            {props.children}
        </GoalContext.Provider>
    );
};
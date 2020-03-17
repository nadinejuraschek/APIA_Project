// REACT
import React, { useState, useContext } from 'react';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import Header from '../../../Header';
import GoalList from './GoalList';

// CONTEXTS
import { GoalContext } from '../../../../contexts/GoalContext';

const Goals = (props) => {
    const { goals, getGoals } = useContext(GoalContext);
    const [ newGoal, setNewGoal ] = useState({ month: 0, type: '', text: '' });

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Goal send to DB: ' + newGoal);

        axios({
            url: '/api/goals',
            method: 'POST',
            data: newGoal
        }).then(response => {
            console.log('Goal in DB: ' + response.data);
            getGoals();
        }).catch(error => {
            console.log('Error: ' + error);
        });
    };

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setNewGoal(newGoal => ({...newGoal, [name]: value}));
    };

    return (
        <section className="wrapper">
            <div className="block">
                <Header header="My Goals" />
 
                <GoalList value={goals} />

                    <div className="wide row">
                        <div className="ui divider"></div>
                        <form className="ui form" onSubmit={handleSubmit}>
                            <div className="three fields">
                                <div className="field">
                                    <label>Month</label>
                                    <select name="month" onChange={handleChange} className="ui dropdown">
                                        <option className="default text" value="">Choose One</option>
                                        <option value="3">3</option>
                                        <option value="6">6</option>
                                        <option value="9">9</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>List</label>
                                    <select name="type" onChange={handleChange} className="ui dropdown">
                                        <option className="default text" value="">Choose One</option>
                                        <option value="personal">Personal</option>
                                        <option value="travel">Travel</option>
                                        <option value="education">Education</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Goal</label>
                                    <input 
                                    type="text"
                                    name="text"
                                    onChange={handleChange} 
                                    placeholder="New Goal" 
                                    />
                                </div>
                            </div>
                            <div className="centered">
                                <button className="circular ui icon button">
                                    <i className="plus icon"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    );
};

export default Goals;
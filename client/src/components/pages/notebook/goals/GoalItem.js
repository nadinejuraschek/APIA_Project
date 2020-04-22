// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import axios from 'axios';

// SEMANTIC UI
import { Checkbox } from 'semantic-ui-react'

const GoalItem = ({ goal, goalid, getGoals, deleteGoal }) => {
    const [ updatedGoal, setUpdatedGoal ] = useState({});
    const [ show, setShow ] = useState(false);
    const [ checked, setChecked ] = useState(goal.checked);

    const showEdit = () => {
        show === true ? setShow(false) : setShow(true);
    };

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdatedGoal(updatedGoal => ({...updatedGoal, [name]: value }));
    };

    const handleEdit = event => {
        event.preventDefault();
        // console.log('Updated goal to send to DB: ' + updatedGoal);
        axios.put('/api/goals/' + goalid, updatedGoal)
        .then(res => {
            // console.log('Updated goal in DB: ' + res.data);
            show === true ? setShow(false) : setShow(true);
            getGoals();
        }).catch(error => {
            console.log('Error: ' + error.response);
        });
    };

    const handleCheck = event => {
        event.preventDefault();
        if (!checked) {
            setChecked(true);
            console.log(checked);
        } else {
            setChecked(false);
            console.log(checked);
        }
        // console.log('Updated goal to send to DB: ' + updatedGoal);
        // axios.put('/api/goals/' + goalid + '/check', checked)
        // .then(res => {
        //     console.log(res.data);
        //     console.log('Goal checked!');
        // }).catch(error => {
        //     console.log('Error: ' + error.response);
        // });
    };
    
    return (
        <div className="item">
            <div>
                <Checkbox 
                    checked={!!checked}
                    onClick={handleCheck}
                />
                    <div className="list-space">
                        <span className='list-check'>{goal.text}</span>
                        <span>
                            <button 
                                type="button"
                                className="no-style-button"
                                onClick={() => showEdit()}
                            >
                                <i className="edit outline icon"></i>
                            </button>
                            <button 
                                type="button"
                                className="no-style-button" 
                                onClick={() => deleteGoal(goalid)}
                            >
                                <i className="close icon"></i>
                            </button>
                        </span>
                    </div>
                    <div className={show === true ? '' : 'hide'}>
                        <form className="ui form edit-goal" onSubmit={handleEdit} >
                            <input 
                                type="text"
                                name="text"
                                placeholder={goal.text}
                                onChange={handleChange}
                            />
                            <div className="button-container centered">
                                <button className="ui button">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default GoalItem;
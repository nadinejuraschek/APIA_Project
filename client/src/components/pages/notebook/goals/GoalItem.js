// REACT
import React, { useState } from 'react';

// SEMANTIC UI
import { Checkbox } from 'semantic-ui-react'

const GoalItem = ({ goal, deleteGoal }) => {
    const [ updatedGoal, setUpdatedGoal ] = useState({});
    const [ show, setShow ] = useState(false);
    const [ checked, setChecked ] = useState(false);

    const showEdit = () => {
        show == true ? setShow(false) : setShow(true);
    };

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdatedGoal(updatedGoal => ({...updatedGoal, [name]: value }));
    };
    
    return (
        <div className="item">
            <div>
                <span>
                    <Checkbox className={checked === true ? 'checked' : '' } />
                    <span>
                        <span className='list-check'>{goal.text}</span>
                    </span>
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
                            onClick={() => deleteGoal(goal.id)}
                        >
                            <i className="close icon"></i>
                        </button>
                    </span>
                    <div className={show == true ? '' : 'hide'}>
                        <div className="ui form edit-goal">
                            <input 
                                type="text"
                                placeholder={goal.text}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default GoalItem;
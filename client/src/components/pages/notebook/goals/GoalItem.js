// REACT
import React, { useState } from 'react';

// SEMANTIC UI
import { Checkbox } from 'semantic-ui-react'

const GoalItem = ({ goal, deleteGoal }) => {
    const [ show, setShow ] = useState(false);

    const showEdit = () => {
        show == true ? setShow(false) : setShow(true);
    };
    
    return (
        <div className="item">
            <div>
                <span className={show == true ? 'hide' : ''}>
                    <Checkbox className="list-check" label={goal.text} />
                </span>
                <span className={show == true ? '' : 'hide'}>
                    <Checkbox className="list-check" label={
                        <div className="ui form">
                            <div className="ten wide field">
                                <input 
                                    className=""
                                    type="text"
                                    placeholder={goal.text}
                                />
                            </div>
                        </div>
                    } />
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
            </div>
        </div>
    );
};

export default GoalItem;
import React, { useState } from 'react';

const WeeklyTable = ({ workhours, deleteWorkhours }) => {
    const [ show, setShow ] = useState(false);

    const showEdit = () => {
        show == true ? setShow(false) : setShow(true);
    };

    return (
        <table className="ui celled table">
            {/* Header */}
            <thead>
                <tr className="work-hour-tr">
                    <th></th>
                    <th>Date</th>
                    {/* <th>Start</th>
                    <th>End</th>
                    <th></th> */}
                    <th>Daily Hours</th>
                    {/* <th>Day Off?</th> */}
                </tr>
            </thead>
                                    
            <tbody>
                {/* Monday */}
                <tr>
                    <td>
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
                            onClick={() => deleteWorkhours(workhours.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td>
                    <td></td>
                    {/* <td>6:00 AM</td>
                    <td>2:00 PM</td>
                    <td>8</td> */}
                    <td></td>
                    {/* <td></td> */}

                </tr>

                {/* Tuesday */}
                <tr>
                    <td>
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
                            onClick={() => deleteWorkhours(workhours.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td>
                    <td></td>
                    <td></td>
                </tr>

                {/* Wednesday */}
                <tr>
                    <td>
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
                            onClick={() => deleteWorkhours(workhours.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                                    
                {/* Thursday */}
                <tr>
                    <td>
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
                            onClick={() => deleteWorkhours(workhours.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td>
                    <td></td>
                    <td></td>
                </tr>

                {/* Friday */}
                <tr>
                    <td>
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
                            onClick={() => deleteWorkhours(workhours.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td>
                    <td></td>
                    <td></td>
                </tr>

                {/* Saturday */}
                <tr>
                    <td>
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
                            onClick={() => deleteWorkhours(workhours.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td>
                    <td></td>
                    <td></td>
                </tr>

                {/* Sunday */}
                <tr>
                    <td>
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
                            onClick={() => deleteWorkhours(workhours.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};

export default WeeklyTable;
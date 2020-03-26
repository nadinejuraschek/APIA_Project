// REACT
import React, { useState } from 'react';

const WeeklyTable = ({ workhour }) => {
    return (
        <table className="ui celled table">
            {/* Header */}
            <thead>
                <tr className="work-hour-tr">
                    {/* <th></th> */}
                    <th>Date</th>
                    {/* <th>Start</th>
                    <th>End</th>
                    <th></th> */}
                    <th>Daily Hours</th>
                    <th>Day Off?</th>
                </tr>
            </thead>
                                    
            <tbody>
                {/* Monday */}
                <tr>
                    {/* <td>
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
                            onClick={() => deleteWorkhours(workhour.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td> */}
                    <td>{workhour.mon.date}</td>
                    {/* <td>6:00 AM</td>
                    <td>2:00 PM</td>
                    <td>8</td> */}
                    <td className={
                        (workhour.mon.dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.mon.dailyHours}
                    </td>
                    <td>
                        { (workhour.mon.dayOff) 
                            ? <i className="icon light checkmark"></i> 
                            : <i className="icon dark close"></i> 
                        }
                    </td>

                </tr>

                {/* Tuesday */}
                <tr>
                    {/* <td>
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
                            onClick={() => deleteWorkhours(workhour.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td> */}
                    <td>{workhour.tue.date}</td>
                    <td className={
                        (workhour.tue.dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.tue.dailyHours}
                    </td>
                    <td>
                        { (workhour.tue.dayOff) 
                            ? <i className="icon light checkmark"></i> 
                            : <i className="icon dark close"></i> 
                        }
                    </td>
                </tr>

                {/* Wednesday */}
                <tr>
                    {/* <td>
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
                            onClick={() => deleteWorkhours(workhour.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td> */}
                    <td>{workhour.wed.date}</td>
                    <td className={
                        (workhour.wed.dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.wed.dailyHours}
                    </td>
                    <td>
                        { (workhour.wed.dayOff) 
                            ? <i className="icon light checkmark"></i> 
                            : <i className="icon dark close"></i> 
                        }
                    </td>
                </tr>
                                    
                {/* Thursday */}
                <tr>
                    {/* <td>
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
                            onClick={() => deleteWorkhours(workhour.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td> */}
                    <td>{workhour.thu.date}</td>
                    <td className={
                        (workhour.thu.dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.thu.dailyHours}
                    </td>
                    <td>
                        { (workhour.thu.dayOff) 
                            ? <i className="icon light checkmark"></i> 
                            : <i className="icon dark close"></i> 
                        }
                    </td>
                </tr>

                {/* Friday */}
                <tr>
                    {/* <td>
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
                            onClick={() => deleteWorkhours(workhour.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td> */}
                    <td>{workhour.fri.date}</td>
                    <td className={
                        (workhour.fri.dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.fri.dailyHours}
                    </td>
                    <td>
                        { (workhour.fri.dayOff) 
                            ? <i className="icon light checkmark"></i> 
                            : <i className="icon dark close"></i> 
                        }
                    </td>
                </tr>

                {/* Saturday */}
                <tr>
                    {/* <td>
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
                            onClick={() => deleteWorkhours(workhour.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td> */}
                    <td>{workhour.sat.date}</td>
                    <td className={
                        (workhour.sat.dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.sat.dailyHours}
                    </td>
                    <td>
                        { (workhour.sat.dayOff) 
                            ? <i className="icon light checkmark"></i> 
                            : <i className="icon dark close"></i> 
                        }
                    </td>
                </tr>

                {/* Sunday */}
                <tr>
                    {/* <td>
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
                            onClick={() => deleteWorkhours(workhour.id)} 
                        >
                            <i className="close icon"></i>
                        </button>
                    </td> */}
                    <td>{workhour.sun.date}</td>
                    <td className={
                        (workhour.sun.dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.sun.dailyHours}
                    </td>
                    <td>
                        { (workhour.sun.dayOff) 
                            ? <i className="icon light checkmark"></i> 
                            : <i className="icon dark close"></i> 
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default WeeklyTable;
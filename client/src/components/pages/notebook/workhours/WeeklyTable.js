import React, { useState } from 'react';

const WeeklyTable = ({ workhour }) => {
    const [ show, setShow ] = useState(false);

    const showEdit = () => {
        show === true ? setShow(false) : setShow(true);
    };

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
                    <td>{workhour.day[0].date}</td>
                    {/* <td>6:00 AM</td>
                    <td>2:00 PM</td>
                    <td>8</td> */}
                    <td className={
                        (workhour.day[0].dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.day[0].dailyHours}
                    </td>
                    <td>
                        { (workhour.day[0].dayOff) 
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
                    <td>{workhour.day[1].date}</td>
                    <td className={
                        (workhour.day[1].dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.day[1].dailyHours}
                    </td>
                    <td>
                        { (workhour.day[1].dayOff) 
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
                    <td>{workhour.day[2].date}</td>
                    <td className={
                        (workhour.day[2].dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.day[2].dailyHours}
                    </td>
                    <td>
                        { (workhour.day[2].dayOff) 
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
                    <td>{workhour.day[3].date}</td>
                    <td className={
                        (workhour.day[3].dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.day[3].dailyHours}
                    </td>
                    <td>
                        { (workhour.day[3].dayOff) 
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
                    <td>{workhour.day[4].date}</td>
                    <td className={
                        (workhour.day[4].dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.day[4].dailyHours}
                    </td>
                    <td>
                        { (workhour.day[4].dayOff) 
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
                    <td>{workhour.day[5].date}</td>
                    <td className={
                        (workhour.day[5].dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.day[5].dailyHours}
                    </td>
                    <td>
                        { (workhour.day[5].dayOff) 
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
                    <td>{workhour.day[6].date}</td>
                    <td className={
                        (workhour.day[6].dailyHours > 10) ? 'negative' : 'positive'
                    }
                    >
                        {workhour.day[6].dailyHours}
                    </td>
                    <td>
                        { (workhour.day[6].dayOff) 
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
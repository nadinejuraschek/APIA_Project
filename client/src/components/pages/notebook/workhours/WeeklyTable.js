import React from 'react';

const WeeklyTable = () => {
    return (
        <table className="ui celled table">
            {/* Header */}
            <thead>
                <tr className="work-hour-tr">
                    <th>Date</th>
                    {/* <th>Start</th>
                    <th>End</th>
                    <th></th> */}
                    <th>Daily Hours</th>
                    <th>Weekly Hours</th>
                    {/* <th>Day Off?</th> */}
                </tr>
            </thead>
                                    
            <tbody>
                {/* Monday */}
                <tr>
                    <td></td>
                    {/* <td>6:00 AM</td>
                    <td>2:00 PM</td>
                    <td>8</td> */}
                    <td></td>
                    <td></td>
                    {/* <td></td> */}
                </tr>

                {/* Tuesday */}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                {/* Wednesday */}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                                    
                {/* Thursday */}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                {/* Friday */}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                {/* Saturday */}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                {/* Sunday */}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};

export default WeeklyTable;
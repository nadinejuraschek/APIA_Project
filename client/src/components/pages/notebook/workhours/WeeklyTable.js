import React from 'react';

const WeeklyTable = () => {
    return (
        <table className="ui unstackable selectable very basic collapsing celled table">
            {/* Header */}
            <thead>
                <tr className="work-hour-tr">
                    <th>Date</th>
                    <th>Start</th>
                    <th>End</th>
                    <th></th>
                    <th>Daily Hours</th>
                    <th>Weekly Hours</th>
                    <th>Day Off?</th>
                </tr>
            </thead>
                                    
            <tbody>
                {/* Monday */}
                    <tr>
                        <td>03/02/2020</td>
                        <td>6:00 AM</td>
                        <td>2:00 PM</td>
                        <td>8</td>
                        <td>8</td>
                        <td>41</td>
                        <td></td>
                    </tr>

                                        {/* Tuesday */}
                                        <tr>
                                            <td>03/03/2020</td>
                                            <td>6:00 AM</td>
                                            <td>2:00 PM</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        {/* Wednesday */}
                                        <tr>
                                            <td>03/04/2020</td>
                                            <td>9:00 AM</td>
                                            <td>2:00 PM</td>
                                            <td>5</td>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>6:00 PM</td>
                                            <td>8:00 PM</td>
                                            <td>2</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        {/* Thursday */}
                                        <tr>
                                            <td>03/05/2020</td>
                                            <td>6:00 AM</td>
                                            <td>2:00 PM</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        {/* Friday */}
                                        <tr>
                                            <td>03/06/2020</td>
                                            <td>9:00 AM</td>
                                            <td>5:00 PM</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        {/* Saturday */}
                                        <tr>
                                            <td>03/07/2020</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><i class="small green checkmark icon"></i></td>
                                        </tr>

                                        {/* Sunday */}
                                        <tr>
                                            <td>03/08/2020</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><i class="small green checkmark icon"></i></td>
                                        </tr>
                                    </tbody>

        </table>
    );
};

export default WeeklyTable;
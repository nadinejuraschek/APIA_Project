import React from 'react';

const PaymentTable = () => {
    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Week #</th>
                    <th>Paid?</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <i className="green checkmark icon"></i>
                    </td>
                    <td>February 7, 2020</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>
                        <i className="green checkmark icon"></i>
                    </td>
                    <td>February 14, 2020</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>
                        <i className="green checkmark icon"></i>
                    </td>
                    <td>February 21, 2020</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>
                        <i className="green checkmark icon"></i>
                    </td>
                    <td>February 28, 2020</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>
                        <i className="red close icon"></i>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>
                        <i className="green checkmark icon"></i>
                    </td>
                    <td>March 13, 2020</td>
                </tr>
            </tbody>

        </table>
    );
};

export default PaymentTable;
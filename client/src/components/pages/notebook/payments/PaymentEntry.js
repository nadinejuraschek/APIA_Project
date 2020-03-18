import React from 'react';

const PaymentEntry = ({ week, paid, date, late }) => {
    const isPaid = () => {
        if (paid) {
            return <i className="icon green checkmark"></i>
        } else {
            return <i className="icon red close"></i>
        };
    };

    return (
        <tr>
            <td>{week}</td>
            <td>
                {isPaid()}
            </td>
            <td>{date}</td>
        </tr>
    );

};

export default PaymentEntry;
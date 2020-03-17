import React from 'react';

const PaymentEntry = ({ week, paid, date, late }) => {

    return (
        // <tr 
        // // {if (payment.late) ? }
        // >
        //     <td>{payment.week}</td>
        //     <td>
        //         {/* {if (payment.paid) ? 'Yes' : 'No' } */}
        //         {/* <i className="green checkmark icon"></i>
        //         <i className="red close icon"></i> */}
        //     </td>
        //     <td>{payment.date}</td>
        // </tr>
        
        <tr>
            <td>{week}</td>
            <td>{paid}</td>
            <td>{date}}</td>
        </tr>
    );

};

export default PaymentEntry;
import React, { useContext } from 'react';

import PaymentEntry from './PaymentEntry';

import { PaymentContext } from '../../../../contexts/PaymentContext';

const PaymentTable = () => {
    const { getPayments, payments } = useContext(PaymentContext);
    console.log(payments);

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
                {/* {payments.map((payment) => (
                    <PaymentEntry 
                        key={payment._id} 
                        paymentid={payment._id} 
                        date={payment.date} 
                        text={payment.text} 
                        // deletePayment={deletePayment} 
                    />
                ))} */}
            </tbody>

        </table>
    );
};

export default PaymentTable;
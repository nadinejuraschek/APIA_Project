import React, { useContext } from 'react';

import PaymentEntry from './PaymentEntry';

import { PaymentContext } from '../../../../contexts/PaymentContext';

const PaymentTable = (props) => {
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
                {payments.map((payment) => (
                    <PaymentEntry 
                        key={payment._id} 
                        paymentid={payment._id} 
                        paid={payment.paid}
                        date={payment.date} 
                        text={payment.text} 
                        late={payment.late}
                        // deletePayment={deletePayment} 
                    />
                ))}
            </tbody>

        </table>
    );
};

export default PaymentTable;
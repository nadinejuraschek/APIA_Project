// REACT
import React, { useContext } from 'react';

// COMPONENTS
import PaymentEntry from './PaymentEntry';

// CONTEXT
import { PaymentContext } from '../../../contexts/PaymentContext';

const PaymentTable = props => {
  const { getPayments, deletePayment, payments } = useContext(PaymentContext);

  return (
    <table className='ui celled table'>
      <thead>
        <tr>
          <th></th>
          <th>Week #</th>
          <th>Paid?</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {payments.map(payment => (
          <PaymentEntry
            key={payment._id}
            paymentid={payment._id}
            payment={payment}
            deletePayment={deletePayment}
            getPayments={getPayments}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;

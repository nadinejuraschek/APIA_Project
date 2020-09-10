// REACT
import React, { useContext } from 'react';

// STYLES
import styles from './payments.module.css';

// COMPONENTS
import PaymentEntry from './PaymentEntry';

// CONTEXT
import { PaymentContext } from '../../../contexts/PaymentContext';

const PaymentTable = props => {
  const { getPayments, deletePayment, payments } = useContext(PaymentContext);
  const sortedPayments = payments.reverse();

  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        <div className={styles.week}>Week</div>
        <div className={styles.date}>Paid On</div>
        <div className={styles.late}>Late?</div>
      </div>
      <div className={styles.list}>
      {sortedPayments.map(payment => (
          <PaymentEntry
            key={payment._id}
            paymentid={payment._id}
            payment={payment}
            deletePayment={deletePayment}
            getPayments={getPayments}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentTable;

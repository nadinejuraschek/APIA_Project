// REACT
import React from 'react';

// COMPONENTS
import Header from '../../../components/Header';
import AddPayment from './AddPayment';
import PaymentTable from './PaymentTable';

// STYLES
import styles from './payments.module.css';

const Payments = () => {
  return (
    <main>
      <div className={styles.grid}>
        <h2 className={styles.header}>Payments</h2>
          <PaymentTable />
          <AddPayment />
      </div>
    </main>
  );
};

export default Payments;

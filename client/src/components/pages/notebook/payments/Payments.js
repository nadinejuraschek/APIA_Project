import React from 'react';

import Header from '../../../Header';
import AddPayment from './AddPayment';
import PaymentTable from './PaymentTable';

const Payments = () => {
    return (
        <section className="wrapper-scroll">
            <div className="block">
                <Header header="Payments" />
                <div className="custom-container">
                    <PaymentTable />
                    <AddPayment />
                </div>
            </div>
        </section>
    );
};

export default Payments;
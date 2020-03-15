import React, { useContext } from 'react';

import Header from '../../../Header';
import AddPayment from './AddPayment';
import PaymentTable from './PaymentTable';

import { PaymentContext } from '../../../../contexts/PaymentContext';

const Payments = () => {
    const [ payment, setPayment ] = useContext(PaymentContext);

    return (
        <section className="wrapper">
            <div className="block">
                <Header header="Payments" />
                <div className="custom-container">
                    <PaymentTable value={payment} />
                    <AddPayment value={payment} />
                </div>
            </div>
        </section>
    );
};

export default Payments;
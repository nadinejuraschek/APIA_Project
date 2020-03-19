// REACT
import React, { useState, createContext, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// CONTEXT
export const PaymentContext = createContext();

export const PaymentProvider = props => {
    const [ payments, setPayments ] = useState([]); 

    // GET
    useEffect( () => {
        getPayments();
    }, []);

    const getPayments = () => {
        axios({
            url: '/user/:id/payments',
            method: 'GET'
        }).then(res => {
            // console.log(res.data.payments);
            setPayments(res.data.payments);
        });
    };

    const deletePayment = (paymentid) => {
        // console.log(paymentid);
        axios.delete('/api/payments/' + paymentid)
        .then(res => {
            // console.log(res);
            getPayments();
        });
    };

    return (
        <PaymentContext.Provider value={ { payments, getPayments, deletePayment } } >
            {props.children}
        </PaymentContext.Provider>
    );
};
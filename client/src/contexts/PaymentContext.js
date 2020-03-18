import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const PaymentContext = createContext();

export const PaymentProvider = props => {
    const [ payments, setPayments ] = useState([]); 

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

    const deletePayments = (paymentid) => {
        axios.delete('/api/payments/' + paymentid)
        .then(res => {
            console.log(res);
            getPayments();
        });
    };

    return (
        <PaymentContext.Provider value={ { payments, getPayments } } >
            {props.children}
        </PaymentContext.Provider>
    );
};
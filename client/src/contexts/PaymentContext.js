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
            setPayments(res);
        });
    };

    return (
        <PaymentContext.Provider value={payments} >
            {props.children}
        </PaymentContext.Provider>
    );
};
import React, { createContext } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = props => {
    const [ payments, setPayment ] = useState([
        {
            week: 1,
            paid: true,
            date: 'February 7, 2020,
            late: false
        },
        {
            week: 2,
            paid: true,
            date: 'February 14, 2020',
            late: false
        },
        {
            week: 3,
            paid: true,
            date: 'February 21, 2020',
            late: false
        },
        {
            week: 4,
            paid: false,
            date: '',
            late: true
        },
        {
            week: 5,
            paid: true,
            date: 'March 13, 2020',
            late: true
        }
    ]);

    return (
        <PaymentContext.Provider value={payments}>
            {props.children}
        </PaymentContext.Provider>
    );
};
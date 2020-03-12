import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
    const [ user, setUser ] = useState({
        role: 'aupair',
        familyID: '12345',
        firstname: 'Alexas',
        lastname: 'Texas',
        country: 'Argentina',
        email: 'at@mail.com',
        password: 'abc123'
    });

    return (
        <UserContext.Provider value={[user]}>
            {props.children}
        </UserContext.Provider>
    );
};


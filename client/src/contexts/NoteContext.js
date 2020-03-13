import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const NoteContext = createContext();

export const NoteProvider = props => {
    // const [ notes, setNotes ] = useState([
    //     {
    //         date: 'March 3, 2020',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    //     {
    //         date: 'March 5, 2020',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    //     {
    //         date: 'March 10, 2020',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     }
    // ]);
    const [ notes, setNotes ] = useState([]); 

    useEffect( () => { 
        axios({
            method: 'GET',
            url: '/user/:id/notes'
        }).then(res => {
            console.log(res.data.notes);
            setNotes(res.data.notes);
        })
    }, []);
      
    return (
        <NoteContext.Provider value={[notes]}>
            {props.children}
        </NoteContext.Provider>
    );
};
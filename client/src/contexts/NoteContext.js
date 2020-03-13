import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const NoteContext = createContext();

export const NoteProvider = props => {
    
    const [ notes, setNotes ] = useState([]); 

    useEffect( () => { 
        axios({
            method: 'GET',
            url: '/user/:id/notes'
        }).then(res => {
            // console.log(res.data.notes);
            setNotes(res.data.notes);
        })
    }, []);
      
    return (
        <NoteContext.Provider value={[notes]}>
            {props.children}
        </NoteContext.Provider>
    );
};
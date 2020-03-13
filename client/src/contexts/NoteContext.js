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

    // const addNote = event => {
    //     event.preventDefault();
    //     axios({
    //         url: '/user/:id/notes',
    //         method: 'POST',
    //         data: req.body
    //     }).then((response) => {
    //         console.log(response);
    //         this.props.history.push('/notebook/notes');
    //     });
    // };
      
    return (
        <NoteContext.Provider value={[notes]}>
            {props.children}
        </NoteContext.Provider>
    );
};
import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const NoteContext = createContext();

export const NoteProvider = props => {
    
    const [ notes, setNotes ] = useState([]); 
    // const [ newNote, setNewNote ] = useState({ date: '', text: '' });

    useEffect( () => { 
        getNotes();
    }, []);

    const getNotes = () => {
        axios({
            url: '/user/:id/notes',
            method: 'GET'
        }).then(res => {
            // console.log(res.data.notes);
            setNotes(res.data.notes);
        });
    };

    // const postNote = () => {
    //     // console.log('Note to send to DB: ' + newNote);
    //     axios({
    //         url: '/api/notes',
    //         method: 'POST',
    //         data: newNote
    //     }).then(response => {
    //         // console.log('Note in DB: ' + response.data);
    //         // re-render component
    //         getNotes();
    //     }).catch(error => {
    //         console.log('Error: ' + error.response);
    //     });
    // };

    const editNote = () => {
        // axios('/api/notes', { _id: id }).then(response => {
        //     // console.log('Note in DB: ' + response.data);
        //     // re-render component
        //     getNotes();
        // }).catch(error => {
        //     console.log('Error: ' + error.response);
        // });
    };

    const deleteNote = (noteid) => {
        // console.log(noteid);
        axios.delete('/api/notes/' + noteid)
        .then(res => {
            console.log(res);
            getNotes();
        });
    };
      
    return (
        <NoteContext.Provider value={ { notes, getNotes, deleteNote } }>
            {props.children}
        </NoteContext.Provider>
    );
};
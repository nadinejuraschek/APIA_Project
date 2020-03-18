import React, { useState } from 'react';

import axios from 'axios';

const NoteCard = ({ noteid, date, text, deleteNote, getNotes, editNote }) => {
    const [ updatedNote, setUpdatedNote ] = useState({});

    const handleEdit = event => {
        event.preventDefault();
        // console.log('Note to send to DB: ' + newNote);
        axios('/api/notes' + noteid, updatedNote)
        .then(res => {
            // console.log('Note in DB: ' + response.data);
            getNotes();
        }).catch(error => {
            console.log('Error: ' + error.response);
        });
    };

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdatedNote(updatedNote => ({...updatedNote, [name]: value }));
    };

    return (
        <div className="ui fluid card note-card">
            <div className="ui dividing header">
                {date}
            </div>
            <div>
                {text}
            </div>
            <div className="ui dividing header">
            </div>
            <div>
                <form className="ui form">
                    <button 
                        type="button"
                        className="no-style-button"
                        // onClick={() => editNote(noteid)}
                    >
                        <i className="edit outline icon"></i>
                    </button>
                    <button 
                        type="button" 
                        className="no-style-button"
                        onClick={() => deleteNote(noteid)} 
                    >
                        <i className="close icon"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NoteCard;
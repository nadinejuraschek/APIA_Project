// REACT
import React, { useState, useContext } from 'react';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import Header from '../../../Header';
import NoteCard from './NoteCard';

// CONTEXTS
import { NoteContext } from '../../../../contexts/NoteContext';

const Notes = (props) => {
    const { getNotes, editNote, deleteNote, notes } = useContext(NoteContext);
    const [ newNote, setNewNote ] = useState({ date: '', text: '' });

    const handleSubmit = event => {
        event.preventDefault();
        // console.log('Note to send to DB: ' + newNote);
        axios({
            url: '/api/notes',
            method: 'POST',
            data: newNote
        }).then(response => {
            // console.log('Note in DB: ' + response.data);
            // re-render component
            getNotes();
        }).catch(error => {
            console.log('Error: ' + error.response);
        });
    };
 
    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setNewNote(newNote => ({...newNote, [name]: value }));
    };
    
    const handleEdit = event => {
        event.preventDefault();
        editNote();
    };

    return (
        <section className="wrapper">
            <div className="block">
                <Header header="My Notes" />
                <div className="ui stackable grid">
                    <div className="four wide column">
                        <h4>
                            A Space for You to Write Down Your Thoughts
                        </h4>
                        <div>
                            Ideas:
                            <div className="ui list">
                                <div className="item">
                                    I am homesick. I miss ...
                                </div>
                                <div className="item">
                                    I discovered a new favorite food / place / hobby of mine:
                                </div>
                                <div className="item">
                                    Things my host kids said to me today:
                                </div>
                            </div>
                        </div>
                        <div className="ui divider"></div>
                        <div className="add-container">
                            <h4>New Note</h4>
                            <form 
                                className="ui form" 
                                onSubmit={handleSubmit}
                            >
                                <div className="field">
                                    <input 
                                        name="date" 
                                        type="text" 
                                        onChange={handleChange}
                                        placeholder="Date" />
                                </div>
                                <div className="field">
                                    <textarea 
                                        name="text" 
                                        onChange={handleChange} 
                                        rows="3" 
                                        type="textarea" 
                                        placeholder="Note" 
                                    />
                                </div>
                                <div className="field centered">
                                    <button 
                                        className="circular ui icon button" 
                                    >
                                        <i className="plus icon"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="twelve wide column">
                        {notes.map((note) => (
                            <NoteCard key={note._id} noteid={note._id} date={note.date} text={note.text} deleteNote={deleteNote} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notes;
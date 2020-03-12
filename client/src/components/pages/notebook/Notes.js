import React, { useContext } from 'react';

import Header from '../../Header';
import NoteCard from './NoteCard';

import { NoteContext } from '../../../contexts/NoteContext';

const Notes = () => {
    const [notes, setNotes] = useContext(NoteContext);

    return (
        <section className="wrapper">
            <div className="block">
                <Header header="My Notes" />
                <div className="costum-container">
                <h4>
                            A Space for You to Write Down Your Thoughts
                        </h4>
                        <h6>
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
                        </h6>
                </div>
                <div className="ui stackable grid">
                    {notes.map((note, index) => (
                        <NoteCard key={index} date={note.date} text={note.text} />
                    ))}
                </div>
                <button className="circular ui icon button"><i class="plus icon"></i></button>
            </div>
        </section>
    );
};

export default Notes;
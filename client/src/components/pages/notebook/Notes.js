import React from 'react';

import Header from '../../Header';
import NoteCard from './NoteCard';

const Notes = () => {
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
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                </div>
            </div>
        </section>
    );
};

export default Notes;
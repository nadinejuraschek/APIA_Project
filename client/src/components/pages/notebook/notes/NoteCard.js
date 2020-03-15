import React from 'react';

const NoteCard = ({ noteid, date, text, deleteNote }) => {
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
                    <button className="ui yellow button">Edit</button>
                    <button type="button" className="ui red button" onClick={() => deleteNote(noteid)} >Delete</button>
                </form>
            </div>
        </div>
    );
};

export default NoteCard;
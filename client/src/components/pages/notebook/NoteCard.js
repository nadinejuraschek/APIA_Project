import React from 'react';

const NoteCard = ({ date, text }) => {
    return (
        <div className="ui fluid card note-card">
            <div className="ui dividing header">
                {date}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
};

export default NoteCard;
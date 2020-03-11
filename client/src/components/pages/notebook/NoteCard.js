import React from 'react';

const NoteCard = (props) => {
    return (
        <div className="ui fluid card note-card">
            <div className="ui dividing header">
                {props.date}
            </div>
            <div>
                {props.text}
            </div>
        </div>
    );
};

export default NoteCard;
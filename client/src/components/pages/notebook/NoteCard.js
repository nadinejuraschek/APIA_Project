import React from 'react';
import Moment from 'react-moment';

const NoteCard = ({ date, text }) => {
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
                    <button className="ui red button">Delete</button>
                </form>
            </div>
        </div>
    );
};

export default NoteCard;
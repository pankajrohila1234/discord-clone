import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

const Message = ({ timestamp, user, message }) => {
    return (
        <div className="message">
            <Avatar src={user.photo} />
            <div className="message__info">
                <h4>
                    {user.displayName}
                    <span className="message__timestamp">
                    {new Date(timestamp?.toDate()).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
                    </span>
                </h4>

                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;
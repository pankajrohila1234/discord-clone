import React from 'react';
import './ChatHeader.css'
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import NotificationIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRounded from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const ChatHeader = ({ channelName }) => {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRounded />
            </div>    
        </div>
    );
}

export default ChatHeader;
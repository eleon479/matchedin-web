import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './MessagePreview.css';

function MessagePreview({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="MessagePreview">
        <Avatar className="profile-pic" alt={name} src={profilePic} />
        <div className="details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default MessagePreview;

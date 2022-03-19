import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './Chat.css';
function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Jared',
      image:
        'https://firebasestorage.googleapis.com/v0/b/matchedin-43d61.appspot.com/o/images%2Fjared.jpg?alt=media&token=9afebd15-5341-4fc9-8daa-1a8932d73533',
      message: 'check these out',
    },
    {
      name: 'Jared',
      image:
        'https://firebasestorage.googleapis.com/v0/b/matchedin-43d61.appspot.com/o/images%2Fjared.jpg?alt=media&token=9afebd15-5341-4fc9-8daa-1a8932d73533',
      message: 'how goes it',
    },
    {
      message: 'hi!',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className="Chat">
      <p className="timestamp">You matched with Jared on 5/10/2022</p>
      {messages.map((message) =>
        message.name ? (
          <div className="message">
            <Avatar
              className="message-image"
              alt={message.name}
              src={message.image}
            />
            <p className="message-text">{message.message}</p>
          </div>
        ) : (
          <div className="message">
            <p className="message-text-self">{message.message}</p>
          </div>
        )
      )}

      <form className="message-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="message-input"
          type="text"
          placeholder="Enter a message..."
        />
        <button onClick={handleSend} className="message-button">
          SEND
        </button>
      </form>
    </div>
  );
}

export default Chat;

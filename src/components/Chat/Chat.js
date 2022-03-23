import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import { db } from '../../services/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getDocs(collection(db, 'messages')).then((messages) => {
      setMessages(messages.docs.map((doc) => doc.data()));
    });
  }, []);

  async function sendMessage(message) {
    try {
      await addDoc(collection(db, 'messages'), {
        message: message,
      });
    } catch (e) {
      console.error('error adding doc: ', e);
    }
  }

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(input);
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

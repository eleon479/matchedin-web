import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';
import Inbox from './components/Inbox/Inbox';
import './index.css';
import Register from './components/Register/Register';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/chat/:person" element={<Chat />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

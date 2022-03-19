import './App.css';
import { useEffect } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Cards />} />
        </Routes>
      </Router>

      {/* Cards */}
      {/* Buttons below Cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;

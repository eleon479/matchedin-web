import './App.css';
import Header from './Header';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/inbox" element={<Header backButton="/" />} />
        <Route path="/chat/:person" element={<Header backButton="/inbox" />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;

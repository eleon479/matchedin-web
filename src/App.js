import './App.css';
import Header from './Header';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      {/* Header */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/inbox" element={<Header backButton="/" />} />
        <Route path="/chat/:person" element={<Header backButton="/inbox" />} />
      </Routes>

      <Outlet />
    </Container>
  );
}

export default App;

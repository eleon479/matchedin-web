import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/inbox" element={<Header backButton="/" />} />
          <Route
            path="/chat/:person"
            element={<Header backButton="/inbox" />}
          />
        </Routes>
        <Outlet />
      </AuthProvider>
    </Container>
  );
}

export default App;

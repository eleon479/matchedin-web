import { Container } from '@mui/material';
import React from 'react';
import Cards from './Cards';
import Controls from './Controls';
import './Home.css';

function Home() {
  return (
    // <Container className="Home" maxWidth="sm">
    <>
      <Cards />
      <Controls />
    </>
    // </Container>
  );
}

export default Home;

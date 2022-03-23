import { logEvent } from 'firebase/analytics';
import React, { useEffect } from 'react';
import Cards from '../Cards/Cards';
import Controls from '../Controls/Controls';
import './Home.css';
import { analytics } from '../../services/firebase';

function Home() {
  useEffect(() => {
    logEvent(analytics, 'load_home');
    console.log('loaded home');
  }, []);

  return (
    <>
      <Cards />
      <Controls />
    </>
  );
}

export default Home;

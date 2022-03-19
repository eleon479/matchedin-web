import React from 'react';
import Cards from './Cards';
import Controls from './Controls';

function Home() {
  return (
    <div>
      {/* Cards */}
      <Cards />

      {/* Buttons below Cards */}
      <Controls />
    </div>
  );
}

export default Home;

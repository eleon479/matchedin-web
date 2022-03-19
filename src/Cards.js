import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';
import { people as PeopleDB } from './data/people';

function Cards() {
  const [people, setPeople] = useState(PeopleDB);

  return (
    <div>
      <h1>Cards</h1>
      <div className="CardsContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="Card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;

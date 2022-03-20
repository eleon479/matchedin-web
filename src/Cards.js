import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';
import { db } from './services/firebase';

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection('people').onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
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
  );
}

export default Cards;

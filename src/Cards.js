import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';
import { db } from './services/firebase';
import { collection, getDocs } from 'firebase/firestore';

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getDocs(collection(db, 'people')).then((people) => {
      setPeople(people.docs.map((person) => person.data()));
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

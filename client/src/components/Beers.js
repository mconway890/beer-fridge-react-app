import React from 'react';
import { beers } from '../data';

const Beers = () => {
  return (
    <div>
      <h1>Beers</h1>
      {beers.map((beer, index) => (
        <div key={index}>
          <h2>Beer: {beer.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Beers

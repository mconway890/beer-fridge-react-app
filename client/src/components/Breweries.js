import React from 'react';
import { breweries } from '../data';

const Breweries = () => {
  return (
    <div>
      <h1>Breweries Page</h1>
      {breweries.map((brewery, index) => (
        <div key={index}>
          <h2>Brewery: {brewery.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Breweries

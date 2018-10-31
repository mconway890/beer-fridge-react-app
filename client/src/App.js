import React, { Component } from 'react';
import BreweryInput from './components/BreweryInput';
import Breweries from './components/Breweries';
import BeerInput from './components/BeerInput';
import Beers from './components/Beers';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Breweries</h2>
          <BreweryInput />
          <Breweries />
        </div>
        <div>
          <h2>Beers</h2>
          <BeerInput />
          <Beers />
        </div>
      </div>
    );
  }
};

export default App;

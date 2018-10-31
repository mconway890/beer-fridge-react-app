import React, { Component } from 'react';
import BreweryInput from './components/BreweryInput';
import Breweries from './components/Breweries';
import BeerInput from './components/BeerInput';
import Beers from './components/Beers';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerInput}/>
        <Route exact path="/breweries" component={BreweryInput} />
      </div>
      </Router>
    );
  }
};

export default App;

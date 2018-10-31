import React, { Component } from 'react';
import BreweryInput from './components/BreweryInput';
import Breweries from './components/Breweries';
import BeerInput from './components/BeerInput';
import Beers from './components/Beers';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/beers/new" component={BeerInput}/>
          <Route exact path="/breweries" component={Breweries}/>
          <Route exact path="/breweries/new" component={BreweryInput} />
        </div>
        </Router>
      </div>
    );
  }
};

export default App;

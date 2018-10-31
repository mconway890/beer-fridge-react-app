import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Beers from '../components/Beers';
import Breweries from '../components/Breweries';
import LoginForm from '../components/LoginForm';


class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/breweries" component={Breweries} />
      </div>
      </Router>
    );
  }
};

export default App

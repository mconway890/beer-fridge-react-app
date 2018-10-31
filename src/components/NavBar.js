import React from 'react';
import {Link} from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const NavBar = () => {
  return (<div className="navbar">
    <Link to="/" style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</Link>
    <Link to="/beers" exact="exact" style={link} activeStyle={{
        background: 'darkblue'
      }}>Beers</Link>
    <Link to="/breweries" exact="exact" style={link} activeStyle={{
        background: 'darkblue'
      }}>Breweries</Link>
  </div>);
};

export default NavBar;

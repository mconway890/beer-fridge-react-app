import React from 'react';
import {NavLink} from 'react-router-dom';

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
    <NavLink to="/" style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</NavLink>
    <NavLink to="/beers" exact="exact" style={link} activeStyle={{
        background: 'darkblue'
      }}>Beers</NavLink>
    <NavLink to="/breweries" exact="exact" style={link} activeStyle={{
        background: 'darkblue'
      }}>Breweries</NavLink>
  </div>);
};

export default NavBar;

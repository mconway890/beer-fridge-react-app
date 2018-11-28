import React from 'react';
import '../App.css'
import {Image} from 'react-bootstrap';

// component without state doesn't need to be a JS object of type Component
const Home = () => {
  return (
    <div>
      <Image src="/beer.jpg" responsive />
    </div>
  );
};

export default Home;

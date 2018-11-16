import React, {Component} from 'react';
import '../App.css'
import {Image} from 'react-bootstrap';


class Home extends Component {

  render() {
    return (
      <div>
        <Image src="/beer.jpg" responsive />
      </div>
    );
  }
};

export default Home;

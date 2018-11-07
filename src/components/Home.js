import React, {Component} from 'react';
import '../App.css'
import {Image} from 'react-bootstrap';


class Home extends Component {

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  signup = ({ username, password, confirm_password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (
      <div>
        <Image src="/beer.jpg" responsive />
      </div>
    );
  }
};

export default Home;

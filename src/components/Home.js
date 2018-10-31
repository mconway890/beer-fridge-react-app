import React, {Component} from 'react';
import '../App.css'


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
        <h1>Beer Fridge</h1>
      </div>
    );
  }
};

export default Home;

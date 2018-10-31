import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
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
        <h1>
          <pre>Login</pre>
        </h1>
        <LoginForm onSubmit={this.login} />
        <h1>
          <pre>Signup</pre>
        </h1>
        <SignupForm onSubmit={this.signup} />
      </div>
    );
  }
};

export default Home;

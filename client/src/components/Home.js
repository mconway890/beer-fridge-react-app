import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';


class Home extends Component {

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (
      <div>
        <h1>Beer Fridge</h1>
        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm onSubmit={this.login} />
      </div>
    );
  }
};

export default Home;

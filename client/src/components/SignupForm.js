import React from "react";

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      confirm_password:''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <label>
          Confirm Password
          <input id="password" name="confirm_password" type="password" onChange={this.handleChange}/>
        </label>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    );
  }
}

export default SignupForm;

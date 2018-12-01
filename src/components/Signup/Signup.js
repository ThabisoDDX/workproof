import React from 'react';
import './Signup.css';

import logowhite from './logowhite.svg';


class Signup extends React.Component {

  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value})
  }

  
  onEmailChange = (event) => {
    this.setState({ email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value})
  }

  onSubmitSignUp = () => {
    fetch('http://localhost:3000/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('dashboard');
      }
    })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="form">
      <header>
        <img className="logowhite" src={logowhite} alt="logo" />
        <p>Sign in to your account </p>
      </header>
      <div>
        <section className="signin">
            <ul>
              <li 
                onMouseEnter={() => onRouteChange('signin')}>
              Sign In</li>
              <li>Sign Up</li>
            </ul>
            <input 
              onChange={this.onNameChange}
              type="text" 
              placeholder="Name" 
              name="name" 
            />
            <input 
              onChange={this.onEmailChange}
              type="email" 
              placeholder="Email" 
              name="email-address" 
            />
            <input 
              className="animated slideInDown faster"
              onChange={this.onPasswordChange}
              type="Password" 
              placeholder="Password" 
              name="password"
            />
            <input 
              onClick={this.onSubmitSignUp}
              type="submit" 
              value="Sign Up" 
            />
        </section>
      </div>
    </div>
  );
  }
}

export default Signup;

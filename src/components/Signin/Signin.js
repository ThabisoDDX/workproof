import React from 'react';
import './Signin.css';

import logowhite from './logowhite.svg';


class Signin extends React.Component {
  constructor(props) {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
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
              <li>Sign In</li>
              <li onMouseEnter={() => onRouteChange('signup')}>Sign Up</li>
            </ul>
            <input
               onChange={this.onEmailChange}
              type="email" 
              placeholder="Email"
              name="email-address" 
            />
            <input 
              onChange={this.onPasswordChange}
              type="Password" 
              placeholder="Password" 
              name="password"
            />
            <input 
              onClick={this.onSubmitSignIn}
              type="submit" 
              value="Sign In" 
            />
        </section>
      </div>
    </div>
  );
  }
}

export default Signin;

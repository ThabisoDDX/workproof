import React from 'react';
import './Form.css';

import logowhite from './logowhite.svg';


const Form = () => {
  return (
    <div className="form">
      <headr>
        <img className="logowhite" src={logowhite} alt="logo" />
        <p>Sign in to your account </p>
      </headr>
      <form>
        <section className="signin">
            <ul>
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
            <input type="email" placeholder="Email" />
            <input type="Password" placeholder="Password" />
            <input type="submit" value="Sign In" />
        </section>
      </form>
    </div>
  );
}

export default Form;

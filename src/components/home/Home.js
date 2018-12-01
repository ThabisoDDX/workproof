import React from 'react';

import './Home.css'
import Header from './Header/Header';

class Home extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <main className="landing">
          <Header />
          <section className="banner">
            <h2>Connect with Change today</h2>
            <p>Union members get protection at work and better wages and part of a movement improving the living standards of all Australian.</p>
            <button onClick={this.props.toggleForm}>Login</button>
          </section>
        </main>
        </div>
    );
  }
}

export default Home;
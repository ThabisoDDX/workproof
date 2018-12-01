import React, { Component } from 'react';
import Home from './components/home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Employee from './components/Employee/Employee';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      route: 'signin',
      users: {
            id: '',
            name: '',
            email: '',
            joined: ''
      }
    }
  }

  loadUser = (user) => {
    this.setState({
      id: user.id,
      name: user.name,
      email: user.email,
      joined: user.joined
    })
  }
  
  onRouteChange = (route) => {
    this.setState({route: route});
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }
  render() {
    const { route } = this.state;
    return (
      <div className="App">
       { route === 'dashboard' 
          ? <div> 
              <Dashboard onRouteChange={this.onRouteChange} />
              <Employee /> 
            </div>
          : (
            route === 'signin'
            ? <div>
                <Home toggleForm={this.toggleForm} />
               { this.state.showForm
                ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                : null
                }
            </div>
            : <div>
                <Home />
                { this.state.showForm
                ? <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                : null
                }
              </div>
          )
      }
      </div>
    );
  }
}

export default App;

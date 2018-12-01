import React from 'react';
import logo from './logo.svg';
import menu from './menu.svg';
import close from './close.svg';

class Header extends React.Component {

  constructor(props) {
    super();
    this.state = {
      show: false
    }
  }

  onToggle = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return(
      <header id="masthead" className="header">
          <img src={logo} className="logo" alt="logo" />
          <nav className="menu">
            <img onClick={this.onToggle} src={menu} alt="menu" />
           { 
             this.state.show 
             ? 
             <div className="animated slideInRight faster">
             <img className="close" onClick={this.onToggle} src={close} alt="close" />
                <ul>
                  <li>About Us</li>
                  <li>Service</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
             </div>
            : null
            }
          </nav>
        </header>
  );
  }
}

export default Header;

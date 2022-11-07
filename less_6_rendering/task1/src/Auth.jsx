import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';
class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false, // default property 'false'
    };
  }

  handeleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handeleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.handeleLogout} />
        ) : (
          <Login onLogin={this.handeleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;

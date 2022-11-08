import React, { Component } from 'react';
import Greeting from './Greeting';

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
    const button = this.state.isLoggedIn ? (
      <button onClick={this.handeleLogout}>Login</button>
    ) : (
      <button onClick={this.handeleLogin}>Logout</button>
    );
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
        {/* {this.state.isLoggedIn ? (
          <button onLogout={this.handeleLogout}>Login</button>
        ) : (
          <button onLogin={this.handeleLogin}>Logout</button>
        )} */}
      </div>
    );
  }
}

export default Auth;

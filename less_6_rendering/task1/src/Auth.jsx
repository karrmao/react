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
    // let button;
    /***V1***/
    // const button = this.state.isLoggedIn ? (
    //   <Logout onClick={this.handeleLogout} />
    // ) : (
    //   <Login onClick={this.handeleLogin} />
    // );

    //  const button = this.state.isLoggedIn ? (
    //    <button onClick={this.handeleLogout}>Logout</button>
    //  ) : (
    //    <button onClick={this.handeleLogin}>Login</button>
    //  );
    /***V1***/

    // if (this.state.isLoggedIn) {
    //   button = <button onClick={this.handeleLogout}>Logout</button>;
    // } else {
    //   button = <button onClick={this.handeleLogin}>Login</button>;
    // }
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

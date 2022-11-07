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
    // let button;
    /***V1***/
    const button = this.state.isLoggedIn ? (
      <button onClick={this.handeleLogout}>Logout</button>
    ) : (
      <button onClick={this.handeleLogin}>Login</button>
    );
    /***V1***/

    // if (this.state.isLoggedIn) {
    //   button = <button onClick={this.handeleLogout}>Logout</button>;
    // } else {
    //   button = <button onClick={this.handeleLogin}>Login</button>;
    // }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
        {/* in version V2 coment this line(bottom)*/}

        {/***V2****/}
        {/* {this.state.isLoggedIn ? (
          <button onClick={this.handeleLogout}>Logout</button>
        ) : (
          <button onClick={this.handeleLogin}>Login</button>
        )} */}
        {/***V2****/}
      </div>
    );
  }
}

export default Auth;

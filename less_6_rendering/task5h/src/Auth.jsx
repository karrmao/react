import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

import './index.scss';

const spinnerSize = '10px';

class Auth extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        isLoggedIn: false,
      });
    this.state = {
      isSpinnerTime: false,
    };
  }

  loginHendler = () => {
    this.setState({
      isSpinnerTime: true,
    });

    setTimeout(() => {
      this.setState({
        isSpinnerTime: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHendler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isSpinnerTime) {
      return <Spinner size="100px" />;
    }
    return this.state.isLoggedIn ? (
      <Logout onLogout={this.logoutHendler} />
    ) : (
      <Logout onLogin={this.loginHendler} />
    );
  }
}

export default Auth;

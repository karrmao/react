import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount = () => {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  };

  componentWillUnmount = () => {
    window.removeEventListener('online', this.isOnline);
    window.removeEventListener('offline', this.isOffline);
  };

  isOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  isOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    let status = 'status';

    if (this.state.status === 'offline') {
      status += ' status_offline';
    }

    return <div className={status}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;

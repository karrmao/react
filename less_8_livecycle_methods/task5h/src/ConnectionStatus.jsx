import React, { Component } from 'react';

class ConnectionStatus extends Component {
  // constructor(props) {
  //   super(props);

  state = {
    onlineStatus: window.navigator.onLine,
  };
  // console.log(this.state);
  //}

  componentDidMount() {
    window.addEventListener('online', this.isConnection);
    window.addEventListener('offline', this.isConnection);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.isConnection);
    window.removeEventListener('offline', this.isConnection);
  }

  isConnection = event => {
    this.setState({
      onlineStatus: event.target.navigator.onLine,
    });
    console.log(event.target.navigator.onLine); //=> false(offLine)/true(onLine)
  };

  render() {
    return (
      <>
        {this.state.onlineStatus ? (
          <div className="status">online</div>
        ) : (
          <div className="status status_offline">offline</div>
        )}
      </>
    );
  }
}
export default ConnectionStatus;

import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleON: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleON: !state.isToggleON,
    }));
  }

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        *{this.state.isToggleON ? 'On' : 'Off'} status here*
      </div>
    );
  }
}

export default Toggler;

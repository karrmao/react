import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusToggler: 'Off',
    };
  }

  handleClick = () => {
    this.setState({
      statusToggler: this.state.statusToggler === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.statusToggler}
      </div>
    );
  }
}

export default Toggler;

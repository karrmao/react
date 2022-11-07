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

// class Toggler extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: 'Off',
//     };
//   }

//   changeStatus = () => {
//     this.setState({
//       status: this.state.status === 'Off' ? 'On' : 'Off',
//     });
//   };

//   render() {
//     return (
//       <button onClick={this.changeStatus} className="toggler">
//         {this.state.status}
//       </button>
//     );
//   }
// }

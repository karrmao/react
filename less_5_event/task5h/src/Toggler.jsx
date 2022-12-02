import React, { Component } from 'react';

// class Toggler extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       statusToggler: 'On',
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       statusToggler: this.state.statusToggler === 'Off' ? 'On' : 'Off',
//     });
//     console.log(this.setState.statusToggler);
//   };

//   render() {
//     return (
//       <div className="toggler" onClick={this.handleClick}>
//         {this.state.statusToggler}
//       </div>
//     );
//   }
// }

// export default Toggler;

//option 2
class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </div>
    );
  }
}
export default Toggler;

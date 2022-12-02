import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.start, //=> 100 & 500
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, props.interval); //=> 1000 & 100
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}
export default Counter;

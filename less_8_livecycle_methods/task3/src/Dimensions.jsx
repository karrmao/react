import React, { Component } from 'react';

class Dimensions extends Component {
  state = {
    width: null,
    height: null,
  };
  //sign to window
  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }
  //signout to window
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}
export default Dimensions;

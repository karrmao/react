import React, { Component } from 'react';

class GoodButton extends Component {
  handlClick(e) {
    console.log(e);
    // console.log(e.target.textContent); //=>  Click-me!
    // console.log(e.clientX); //=>  279;
    // console.log(e.type); //=> click

    alert('Good job!');
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handlClick}>
        Click-me!
      </button>
    );
  }
}

export default GoodButton;

import React, { Component } from 'react';
class GoodButton extends Component {
  hendlClick() {
    //console.log(event.target.textContent);
    alert('Good jobS!');
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.hendlClick}>
        Click-me!
      </button>
    );
  }
}

export default GoodButton;

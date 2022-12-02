import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = (color, e) => {
    console.log(e);
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={this.setBodyColor.bind(this, RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={e => this.setBodyColor(BLUE, e)}
        ></button>
      </div>
    );
  }
}

export default Colors;

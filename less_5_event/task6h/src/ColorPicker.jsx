import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textColorName: '',
    };
  }

  setColorName = color => {
    this.setState({
      textColorName: color,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.textColorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setColorName('Coral')}
            onMouseLeave={() => this.setColorName('')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setColorName('Aqua')}
            onMouseLeave={() => this.setColorName('')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setColorName('Bisque')}
            onMouseLeave={() => this.setColorName('')}
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;

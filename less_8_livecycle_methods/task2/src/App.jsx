import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: true,
    };
  }

  onToggle = () => {
    this.setState({
      visibility: !this.state.visibility,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.onToggle}>Toggle</button>
        {this.state.visibility && (
          <>
            <Clock location="New-York" offset={-5} />
            <Clock location="London" offset={0} />
            <Clock location="Kyiv" offset={3} />
          </>
        )}
      </>
    );
  }
}

export default App;

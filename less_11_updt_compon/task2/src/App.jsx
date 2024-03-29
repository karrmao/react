import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">
          Show
        </button>
        <Dialog
          isOpen={this.state.isOpen}
          onClose={this.hideDialog}
          title="some title"
        >
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Form',
    },
  };

  handleChange = event => {
    const { value, name } = event.target;
    //status update userData
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={userData.userData} />
          <Profile userName={userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;

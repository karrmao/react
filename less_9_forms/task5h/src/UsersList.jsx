import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    textValue: '',
  };

  handleChange = event => {
    this.setState({
      textValue: event.target.value,
    });
  };

  render() {
    const users = this.props.users;
    const resultUsersList = (
      this.state.textValue === ''
        ? users
        : users.filter(user => user.name.toLowerCase().includes(this.state.textValue.toLowerCase()))
    ).map(user => <User key={user.id} name={user.name} age={user.age} />);
    return (
      <div>
        <Filter
          filterText={this.state.textValue}
          count={resultUsersList.length}
          onChange={this.handleChange}
        />
        <ul className="users">{resultUsersList}</ul>
      </div>
    );
  }
}

export default UsersList;

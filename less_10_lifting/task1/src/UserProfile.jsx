import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    if (this.props.userData) {
      return null;
    }

    //const { name, location, avatar_url } = this.state.userData;
    const { avatar_url, location, name } = this.props.userData;

    return (
      <div>
        <div className="user">
          <img alt="User Avatar" src={avatar_url} className="user__avatar" />
          <div className="user__info">
            <span className="user__name">{name}</span>
            <span className="user__location">{location}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;

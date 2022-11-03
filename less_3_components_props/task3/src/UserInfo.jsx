import React from 'react';
import UserAvatar from './UserAvatar';

const UserInfo = props => {
  return (
    <div className="user-info">
      <UserAvatar user={props.user} />
      <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;

import React from 'react';

function UserAvatar(props) {
  return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
}

export default UserAvatar;

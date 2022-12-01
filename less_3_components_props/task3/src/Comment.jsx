import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');
console.log(formatDate());

const Comment = props => {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
      <div className="comment__date">{formatDate()}</div>
    </div>
  );
};

export default Comment;
//props.author =>
//{name: 'Tom', avatarUrl: 'https://avatars1.githubusercontent.com/users'}

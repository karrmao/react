import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import './comment.scss';
// import Comment from './ Comment';
// import UserInfo from './UserInfo';
import App from './App';

const rootElement = document.querySelector('#root');

// const userInfo = {
//   name: 'Tom',
//   avatarUrl: 'https://avatars1.githubusercontent.com',
// };

ReactDOM.render(
  //   <Comment user={userInfo} text="Good Jobe" date={new Date('2019-01-01T11:32:19.566Z')} />,
  //   rootElement,
  <App />,
  rootElement,
);

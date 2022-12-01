import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import './comment.scss';
import App from './App';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  // <Comment user={userInfo} text="Good Jobe!" date={new Date('2019-01-01T11:32:19.566Z')} />,
  <App />,
  rootElement,
);

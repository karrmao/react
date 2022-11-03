import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={`${new Date('2005-01-01T11:11:11.819z')}`}
  />,
  rootElement,
);

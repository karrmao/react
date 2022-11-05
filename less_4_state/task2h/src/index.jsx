import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import Clock from './Clock';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);

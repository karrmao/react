import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

ReactDOM.render(<SearchField name="Tom" />, rootElement);

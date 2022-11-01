// should render following html

// <h1 class="title">Todo List</h1>
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

// const element = React.createElement('h1', { className: 'title' }, 'Todo List');

const element = <h1 class="title">Todo List</h1>;

ReactDOM.render(element, rootElement);

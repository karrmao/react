import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 15,
    name: 'Ann',
  },
  {
    id: 'id-1',
    age: 25,
    name: 'Den',
  },
  {
    id: 'id-2',
    age: 30,
    name: 'Bob',
  },
  {
    id: 'id-3',
    age: 20,
    name: 'Clara',
  },
];
ReactDOM.render(<UsersList users={users} />, rootElement);

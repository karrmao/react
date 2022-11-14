import React from 'react';
import UsersList from './UsersList';

const users = [
  { id: 0, name: 'Albert', age: 15 },
  { id: 1, name: 'Bob', age: 30 },
  { id: 2, name: 'Cicerone', age: 19 },
  { id: 3, name: 'Denis', age: 43 },
  { id: 4, name: 'Igor', age: 5 },
  { id: 5, name: 'Forest', age: 90 },
];

const App = () => {
  return <UsersList users={users} />;
};

export default App;

import React from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = objUser => {
    console.log(objUser);
  };

  return <UserForm onSubmit={createUser} />;
};
export default App;

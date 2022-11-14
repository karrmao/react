import React from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = formData => {
    console.log(formData);
  };

  return <UserForm onSubmit={createUser} />;
};
export default App;

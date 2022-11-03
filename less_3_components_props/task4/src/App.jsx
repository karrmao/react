import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/users',
};

const App = () => {
  return <Comment athor={userInfo} text="Good Jobe!" date={new Date('2019-01-01T11:32:19.566Z')} />;
};

export default App;

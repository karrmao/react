import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={100} interval={1000} />
      <Counter start={500} interval={100} />
    </>
  );
};

export default App;

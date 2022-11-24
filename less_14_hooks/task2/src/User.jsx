import React, { useState } from 'react';

const User = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(0)}>
        {counter}
      </span>
      <button className="counter__button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
};
export default User;

import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [show, setShow] = useState(true);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <button className="button" onClick={toggle}>
        Show / Hide
      </button>
      {show && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </>
      )}
    </>
  );
};

export default App;

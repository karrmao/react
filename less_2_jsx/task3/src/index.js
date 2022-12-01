import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const renderSeconds = time => {
  const secondsX = time.getSeconds();

  const backgroundColor = secondsX % 2 === 0 ? '#fff' : '#000';
  const textColor = secondsX % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      {secondsX}
    </div>
  );

  ReactDOM.render(element, rootElement);
};

//test data
renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 500);

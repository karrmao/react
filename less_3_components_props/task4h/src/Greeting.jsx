import React from 'react';
import moment from 'moment';

const Greeting = props => {
  //age = 2022 - 2005
  //   console.log(new Date().getFullYear());
  //   console.log(moment(new Date('2005-01-01T11:11:11.819z')).format('YYYY'));
  const age = new Date().getFullYear() - moment(props.birthDate).format('YYYY');

  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}</div>
  );
};

export default Greeting;

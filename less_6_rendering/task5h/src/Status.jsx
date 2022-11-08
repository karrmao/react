import React from 'react';
import Offline from './Offline';
import Online from './Online';

const Status = props => {
  return props.isOnline ? <Online /> : <Offline />;
};
export default Status;

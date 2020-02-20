import React from 'react';
import Online from './Online';
import Offline from './Offline';


const Status = props => {

  return (
 
    props.isOnline ? <Online /> : <Offline />
  )
};



export default Status;
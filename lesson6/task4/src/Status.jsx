import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';


const Status = props => {
  
  
 
    return (
     
        <>     
          { props.isOffline

            ? <Online  />
            : <Offline />}
        </> 
      
    )
  };



export default Status;
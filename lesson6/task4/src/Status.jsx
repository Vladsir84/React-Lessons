import React, {Component } from 'react';
import Online from './Online';
import Offline from './Offline';


class Status extends Component {
  state = {
    isOnline: true
  };
  
  
  state = {
    Offline: false
  };
  
  render() {
  return (
      
        
        this.state.isOnline 
          
            ? <Online />
            : <Offline />
        
      
    );
  }
}


export default Status;
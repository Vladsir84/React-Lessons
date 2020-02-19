import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';


class Status extends Component {
  
  state = {
      isOnline: true
  };

  state = {
    isOffline: false
};
  
  render() {
    return (
     
          
          this.state.isOffline

            ? <Online  />
            : <Offline />
        
      
    );
  }
}


export default Status;
import React, {Component } from 'react';
import Online from './Online';
import Offline from './Offline';


class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
    };
  }

  isOnline = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  Offline = () => {
    this.setState({
      isLoggedIn: false,
    });
  }
  
  render() {
  return (
      
        
        this.state.isOnline 
          
            ? <Online />
            : <Offline />
        
      
    );
  }
}


export default Status;
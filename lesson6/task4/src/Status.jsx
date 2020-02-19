import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';


class Status extends Component {
  
  state = {
      Offline: false
  };

  render() {
    return (
      <div className="status">
        {
          this.state.Offline

            ? <Online  />
            : <Offline />
        }
      </div>
    );
  }
}


export default Status;
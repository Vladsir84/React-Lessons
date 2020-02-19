import React, { Component } from 'react';
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
      isOnline: true,
    });
  }

  Offline = () => {
    this.setState({
      Offline: false,
    });
  }

  render() {
    return (
      <div className="status">
        {
          this.state.isOnline

            ? <Online isOnline={this.isOnline} />
            : <Offline Offline={this.Offline} />
        }
      </div>
    );
  }
}


export default Status;
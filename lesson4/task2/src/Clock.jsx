import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';


const getTimeWidthOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return moment(currentTime.setHours(currentTime.getHours() + offset + utcOffset)).format('LTS');
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      currentTime: getTimeWidthOffset(props.offset),
    };

    setInterval(() => {
      this.setState({
        currentTime: getTimeWidthOffset(props.offset),
      });
    }, 1000)
  }

  render() {
    return (
      <div className="clock" >
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.currentTime}</div>
      </div>

    );
  }
}

export default Clock;
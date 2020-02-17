import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

function timeToString(offset) {
  const getTime = new Date();
  const timeWthOffset = getTime.setHours(getTime.getHours() + offset);
  return moment(timeWthOffset).format('LTS');

}


class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: timeToString(props.offset),
    };

    setInterval(() => {
      this.setState({
        time: timeToString(props.offset),
      });
    }, 1000)
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">
          {this.props.location}
        </div>
        <div className="clock__time">
          {this.state.time}
        </div>
      </div>
    );
  }
}

export default Clock;
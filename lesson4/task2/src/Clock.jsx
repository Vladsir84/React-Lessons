import React, { Component } from 'react';
import './clock.scss';

function timeToString(date) {
  let hour = new Date(new Date().setHours(new Date().getHours() + date)).getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  return `${hour}:${minute}:${second}`;

}


class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '00:00:00',
    };

    setInterval(() => {
      this.setState({
        time: timeToString(this.props.offset),
      });
    }, 1000)
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">
          {`${this.props.location}`}
        </div>
        <div className="clock__time">
          {this.state.time}
        </div>
      </div>
    );
  }
}

export default Clock;
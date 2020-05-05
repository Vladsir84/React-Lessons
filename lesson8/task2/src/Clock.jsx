import React, { Component } from 'react';
import moment from 'moment';

function timeToString(offset) {
    const getTime = new Date();
    const timeWthOffset = getTime.setHours(getTime.getHours() + offset);
    return moment(timeWthOffset).format('LTS');

}


class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: timeToString(props.offset),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: timeToString(this.props.offset),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div className="clock">

            <div className="clock__location">
                {this.props.location}
            </div>
            <div className="clock__time">
                {this.state.date}
            </div>
        </div>;
    }
}

export default Clock;
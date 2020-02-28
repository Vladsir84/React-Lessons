import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: new Date(),
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
                {this.state.date.toLocaleTimeString()}
            </div>


        </div>;
    }
}

export default Clock;
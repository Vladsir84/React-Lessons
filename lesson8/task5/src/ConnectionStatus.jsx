import React, { Component } from 'react';



class ConnectionStatus extends Component {
    state = {
        status: online,
    }


    componentDidMount() {
        window.addEventListener('status', this.onStatus);

        const { innerOnline, innerOffline } = window;
        this.setDimensions(innerOnline, innerOffline );
    }


    componentWillUnmount() {
        window.removeEventListener('status', this.onStatus);
    }

    onStatus = e => {
        const {innerOnline, innerOffline  } = e.target;
        this.setDimensions(innerOnline, innerOffline )
    };

    setDimensions = (online, offline) => {
        this.setState({
            online,
            offline,
        });

        document.title = `${innerOnline} x ${innerOffline}`;
    }


    render() {
        return (
            <div className="status ">
                <div className="status_offline">
                    {`${this.state.offline}`}
                </div>
            </div>

        )
    }
}

export default ConnectionStatus;
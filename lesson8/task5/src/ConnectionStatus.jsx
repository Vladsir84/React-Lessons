import React, { Component } from 'react';

class ConnectionStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
        state: true
        }
    }

    componentDidMount() {
        window.addEventListener('online', this.onlineStatus);
        window.addEventListener('offline', this.offlineStatus);
    }


    componentWillUnmount() {
        window.removeEventListener('online', this.onlineStatus);
        window.removeEventListener('offline', this.offlineStatus);
    }

   
    onlineStatus = () => {
        this.setState({
          state: true
        });
    }

    offlineStatus = () => {
        this.setState({
          state: false
        });
    }
    
    
    render() {
        return ( 
        this.setState.state 
        ? <div className="status status_offline">offline</div>
        : <div className="status">online</div>
        
        )
    }
}

export default ConnectionStatus;
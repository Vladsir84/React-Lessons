import React, { Component } from 'react';

class ConnectionStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
        state: true        // состояние по умолчанию
        }
    }

    componentDidMount() {                                             // подписка на событие
        window.addEventListener('online', this.onlineStatus);
        window.addEventListener('offline', this.offlineStatus);  
    }


    componentWillUnmount() {                                         // отписка от события
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
        this.state 
        ? <div className="status">online</div>
        : <div className="status status_offline">offline</div>
        
        )
    }
}

export default ConnectionStatus;
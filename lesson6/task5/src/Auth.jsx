import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            isLogged: false,
            moveOfSpinner: false,
        }
    }

    onLogin = () => {
        this.setState({
            isLogged: true,
        })
        setTimeout(() => {
            this.setState({
              moveOfSpinner: true,
            })
        }, 2000)
    }

    onLogout = () => {
        this.setState({
            isLogged: false,
            moveOfSpinner: false,
        })
    }

    render() {
        
      if (this.state.isLogged == false) {
            return <Login onLogin={this.onLogin} />
        }

        if (this.state.moveOfSpinner == true) {
            return <Logout onLogout={this.onLogout} />
        }

        if (this.state.isLogged == true) {
            return <Spinner size={35}/>
        }
    }
}

export default Auth;
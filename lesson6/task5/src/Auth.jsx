import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
    constructor(props) {
        super(props);


        this.state = {           // default state
            isLogged: false,
            moveOfSpinner: false,
        }
    }

    onLogin = () => {
        this.setState({
            moveOfSpinner: true,
        })
        setTimeout(() => {

            this.setState({
                isLogged: true,
                moveOfSpinner: false,
            })
        }, 2000);
    }

    onLogout = () => {
        this.setState({
            isLogged: false,
            moveOfSpinner: false,
        })

    }

    render() {

        if (this.state.moveOfSpinner == true) {
            return <Spinner size={35} />
        }

        return this.state.isLogged
            ? <Logout onLogout={this.onLogout} />
            : <Login onLogin={this.onLogin} />
    };
};

export default Auth;
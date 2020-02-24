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
        this.setState({isLogged: true,});
        this.eventOfSpinner();
    }

    onLogout = () => {
        this.setState({isLogged: false})
        this.eventOfSpinner();
    }
     
    eventOfSpinner = () => {
        setTimeout(() => {
          this.setState({
            moveOfSpinner: false      // функция в свойстве eventOfSpinner отображает спиннер.
          });
        }, 2000);
        this.setState({
            moveOfSpinner: true
        });
      };
    
    render() {
        if (this.state.isLogged == false) {
            return <Login onLogin={this.onLogin} />
        }
        
        if (this.state.moveOfSpinner == true) {             // sequence
            return <Spinner size={35} />
        }

        if (this.state.isLogged == true) {
            return <Logout onLogout={this.onLogout} />
        }

    };

};

export default Auth;
import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';


class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      moveOfSpinner: true,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
      setTimeout(() => {
         this.setState({  
          moveOfSpinner: false,
        })   
      }, 2000);
   }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
      moveOfSpinner: true,
    });
  }

  render() {
   
        const notSpinner = !this.state.moveOfSpinner ?
        <Logout onLogout={() => this.onLogout} />  :
        <Spinner size={35} />    
        
          return (
                 !this.state.isLoggedIn ?
                <Login onLogin={this.onLogin} /> :
                 notSpinner 
    )
  }
}

export default Auth;
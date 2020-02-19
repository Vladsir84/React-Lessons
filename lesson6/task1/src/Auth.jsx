import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }



  // const button = this.state.isLoggedIn
  //     ? <button onClick={this.handleLogout}>Logout</button>
  //     : <button onClick={this.handleLogin}>Login</button>;


  // if (this.state.isLoggedIn) {
  //     button =  <button onClick={this.handleLogout}>Logout</button>;

  // } else {
  //     button =  <button onClick={this.handleLogin}>Login</button>;
  // }

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {
          this.state.isLoggedIn
            ? <Logout onLogout={this.onLogout} />
            : <Login onLogin={this.onLogin} />
        }
      </div>
    )
  }
}


export default Auth;
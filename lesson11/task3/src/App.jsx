import React, { Component } from 'react';
import Expand from './Expand';


class App extends Component {
  state = {
    isOpen: false,
  }

  hideExpand = () => {
    this.setState({
      isOpen: false
    });
  }


  showExpand = () => {
    this.setState({
      isOpen: true
    });
  }


  render() {
    const elem = (
      <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a
      class.</p>
    )
    return (

      <div className="app">
        <button className="expand__toggle-btn" onClick={this.showExpand}><i className="fas fa-chevron-up"></i></button>
        <Expand
          isOpen={this.state.isOpen}
          onClose={this.hideExpand}
          title="some title">
          {elem}
        </Expand>
      </div>
    )
  };
}

export default App;
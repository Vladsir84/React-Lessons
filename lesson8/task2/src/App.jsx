import React, { Component } from 'react';
import Clock from './Clock'



class App extends Component {
    constructor(props) {
       super(props); 
       this.state = {
        visible: true, 
     }; 
    
       this.toggle = this.toggle.bind(this);
    }
    
    
    toggle()  {
        this.setState({
            visible: !this.state.visible,
        });
    };
    render() {
       return ( 
        <div>
            <button onClick={this.toggle}>Toggle</button>
            <div className="clock__location clock__time">{this.state.visible && <Clock />}</div>
            <div className="clock__location clock__time">{this.state.visible && <Clock />}</div>
            <div className="clock__location clock__time">{this.state.visible && <Clock />}</div>
        </div>
       );
    }
}

export default App;
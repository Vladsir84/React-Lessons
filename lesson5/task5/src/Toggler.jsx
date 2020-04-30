import React, { Component } from 'react';

class Toggler extends Component {
   constructor(props) {
      super(props)
      this.state = { isToggledOn: true };
   
     this.handleClick = this.handleClick.bind(this);
   }
   
   handleClick() {
      this.setState(state => ({
         isToggledOn: !state.isToggledOn   
      }));
   }

   render() {
      return (
         <button className="toggler" onClick={this.handleClick}>
            {this.state.isToggledOn ? 'On' : 'Off'}
         </button>
      );
   }
}

export default Toggler;
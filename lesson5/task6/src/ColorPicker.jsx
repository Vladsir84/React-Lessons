import React, { Component } from 'react';

class ColorPicker extends Component {
   constructor(props) {
      super(props);
      this.state = {
         text: '',
      };
   }

   setBodyColor = color => {
      this.setState({
         text: color
      });
   }

   clearBodyColor = () => {
      this.setState({
         text: ''
      });
   }

   render() {
      return (
         <div>
            <div className="picker__title">
               {this.state.text}
            </div>
            <div>
               <button className="picker__button picker__button_coral"
                  onMouseEnter={this.setBodyColor.bind(this, 'Coral')}
                  onMouseLeave={this.clearBodyColor.bind(this, '')}
               />
               <button className="picker__button picker__button_aqua"
                  onMouseEnter={() => this.setBodyColor('Aqua')}
                  onMouseLeave={this.clearBodyColor.bind(this, '')}
               />
               <button className="picker__button picker__button_bisque"
                  onMouseEnter={() => this.setBodyColor('Bisque')}
                  onMouseLeave={this.clearBodyColor.bind(this, '')}
               />
            </div>
         </div>
      );
   }
}


export default ColorPicker;
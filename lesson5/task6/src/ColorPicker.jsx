import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

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

  clearColor = () => {
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
            onMouseEnter={this.setBodyColor.bind(this, CORAL)}
            onMouseLeave={this.clearColor.bind(this)}
          />

          <button className="picker__button picker__button_aqua"
            onMouseEnter={this.setBodyColor.bind(this, AQUA)}
            onMouseLeave={this.clearColor.bind(this)}

          />

          <button className="picker__button picker__button_bisque"
            onMouseEnter={this.setBodyColor.bind(this, BISQUE)}
            onMouseLeave={this.clearColor.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
import React, { Component } from 'react';

const CORAL = 'coral';
const AQUA = 'aqua';
const BISQUE = 'bisque';

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
            onMouseOver={this.setBodyColor.bind(this, CORAL)}
            onMouseOut={this.clearColor.bind(this)}
          />

          <button className="picker__button picker__button_aqua"
            onMouseOver={this.setBodyColor.bind(this, AQUA)}
            onMouseOut={this.clearColor.bind(this)}

          />

          <button className="picker__button picker__button_bisque"
            onMouseOver={this.setBodyColor.bind(this, BISQUE)}
            onMouseOut={this.clearColor.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ' ',
    };
}
  
  setBodyColor = color => {
    this.setState({
      text: color
    });
  }

  render() {
    return (
      <div>
        <div class="picker__title">
        {this.state.text}
      </div>
        <div>
          <button className="picker__button picker__button_coral"
            onMouseOver={() => this.setBodyColor('Coral')}
            onMouseOut={() => this.setState({
              text: ' '
            })}
          />

          <button className="picker__button picker__button_aqua"
            onMouseOver={() => this.setBodyColor('Aqua')}
            onMouseOut={() => this.setState({
              text: ' '
            })}

          />

          <button className="picker__button picker__button_bisque"
            onMouseOver={() => this.setBodyColor('Bisque')}
            onMouseOut={() => this.setState({
              text: ' '
            })}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
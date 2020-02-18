import React, { Component } from 'react';

class ColorPicker extends Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div>
        <div class="picker__title">
          Red
      </div>
        <div>
          <button className="picker__button picker__button_coral"></button>
          <button className="picker__button picker__button_aqua"></button>
          <button className="picker__button picker__button_bisque"></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
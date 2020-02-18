import React from 'react';

class GoodButton extends React.Component {
  
  handleClick() {
    alert(document.querySelector('.fancy-button').textContent);
  }
  render() {
     return (
      <button 
      className="fancy-button"
      onClick={this.handleClick}
    >
      Good job!
    </button>
     );
   }

}

export default GoodButton;
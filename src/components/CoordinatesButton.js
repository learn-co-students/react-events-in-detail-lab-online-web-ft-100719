import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = event => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default CoordinatesButton;

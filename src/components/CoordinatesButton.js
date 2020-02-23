import React, { Component } from 'react'

class CoordinatesButton extends Component {
  handleOnReceiveCoordinates = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    return this.props.onReceiveCoordinates([x, y])
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOnReceiveCoordinates}></button>
      </div>
    )
  }
}

export default CoordinatesButton
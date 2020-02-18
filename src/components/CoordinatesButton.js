import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  constructor() {
    super()
  }

  handleClick = (event) => {
    const coordinates = [event.clientX, event.clientY];
    return this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}

// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  callback = (coords) => this.props.onReceiveCoordinates(coords)

  handleClick = (event) => (
    this.callback([event.clientX, event.clientY])
  )
  render(){
    return(
      <button onClick={this.handleClick}>Button</button>
    )
  }
}

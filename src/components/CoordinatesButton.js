// Code CoordinatesButton Component Here
import React, { Component } from 'react'


export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])     
  }


  render(){
    return(
      <div>
        <h1>Coordinates </h1>
        <button onClick={this.handleClick}>coordinated button</button>
      </div>
    )
  }


}

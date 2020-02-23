// Code CoordinatesButton Component Here
import React, { Component } from "react"

class CoordinatesButton extends React.Component {
  constructor(props) {
    super()

  }

  handleOnClick = (event) => {
    const coordArr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordArr);
  }

  render() {
    return (
      <div> 
        <button onClick={this.handleOnClick}> Coordinates
        </button>
      </div>
      
    )
  }
}

export default CoordinatesButton
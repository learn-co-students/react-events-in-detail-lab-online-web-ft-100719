// Code DelayedButton Component Here
import React, { Component } from "react"

class DelayedButton extends React.Component {
  constructor(props) {
    super()

  }

  handleOnClick = (event) => {
    event.persist();
    //const target = event.target
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay);
  }

  render() {
    return (
      <div> 
        <button onClick={this.handleOnClick}> DELAY
        </button>
      </div>
      
    )
  }
}

export default DelayedButton
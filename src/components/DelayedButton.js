// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  callback = (event) => this.props.onDelayedClick(event);

  handleClick = (event) => {
    event.persist() 
    return this.callback(event)
  };

  render(){
    return(
      <button onClick={this.handleClick}>Delay</button>
    )
  }
}
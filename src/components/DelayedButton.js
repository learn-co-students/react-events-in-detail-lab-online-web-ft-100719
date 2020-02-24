import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  delayedClickHandler = event => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render() {
    return (
      <button onClick={this.delayedClickHandler}>Delayed Button</button>
    )
  }
}
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  delayedClickHandler = event => {
    event.persist()
    setTimeout(e => this.props.onDelayedClick(e), this.props.delay, event)
  }

  render() {
    return (
      <button onClick={this.delayedClickHandler}>Delayed Button</button>
    )
  }
}
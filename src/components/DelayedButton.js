import React, { Component } from 'react'

class DelayedButton extends Component {
  handleOnDelayedClick = (event) => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOnDelayedClick}></button>
      </div>
    )
  }
}

export default DelayedButton
import React, { Component } from "react";

export default class Delayed extends Component {

  handleClick = (e) => {
    e.persist();
   setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}
      ></button>
    );
  }
}

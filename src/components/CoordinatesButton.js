import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (e) => {
    return this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }
  render() {
    return <button onClick={this.handleClick}></button>;
  }
}

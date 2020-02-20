import React, { Component } from 'react'; 

class CoordinatesButton extends Component {
    handleClick = (e) => {
        let coordinates = [
            e.clientX,
            e.clientY
        ]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        );
    }
}

export default CoordinatesButton
// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let x = event.clientX
        let y = event.clientY

        const coords = [x, y]
        this.props.onReceiveCoordinates(coords)
    }

    render(){
        return <button onClick={this.handleClick}>CoordinatesButton</button>
    }
}

export default CoordinatesButton
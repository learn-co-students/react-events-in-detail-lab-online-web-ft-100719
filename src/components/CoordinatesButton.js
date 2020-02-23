// Code CoordinatesButton Component Here

import React from 'react'

export default class CoordinatesButton extends React.Component {
    constructor() {
        super()
    }

    handleClick = (event) => {

        const arr = [event.clientX, event.clientY]
            this.props.onReceiveCoordinates(arr)
    }

    render() {
        return (

                <button onClick={this.handleClick}>Coordinates Button</button>
           
        )
    }
}

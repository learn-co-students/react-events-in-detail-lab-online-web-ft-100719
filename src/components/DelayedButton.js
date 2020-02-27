import React, { Component } from 'react';

export default class DelayedButton extends React.Component {
    constructor() {
        super()
    }

    handleClick = (event) => {
        event.persist(); 
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }
    
    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}

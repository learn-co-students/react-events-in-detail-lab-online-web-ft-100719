// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

    constructor(props){
        super(props)
    }

    handleClick = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
          }, this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Delay</button>
            </div>
        )
    }
}

export default DelayedButton
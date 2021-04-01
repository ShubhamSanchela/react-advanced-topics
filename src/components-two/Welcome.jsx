import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} a.k.s {this.props.heroname}</h1>
                {this.props.children}
            </div>
        )
    }
}

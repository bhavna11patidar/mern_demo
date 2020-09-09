import React, { Component } from 'react'

export default class Second extends Component {
    render() {
        return (
            <div>
                <h1>This is my Second Component</h1>
                <h2>Title: {this.props.title}</h2>
            </div>
        )
    }
}

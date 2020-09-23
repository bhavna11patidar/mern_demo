import React, { Component } from 'react'

export default class CC1 extends Component {
    render() {
        return (
            <div>
                <h1>This is a class Component</h1>
                <h1>Title: {this.props.title}</h1>
                <h2>Name: {this.props.name }</h2>
            </div>
        )
    }
}

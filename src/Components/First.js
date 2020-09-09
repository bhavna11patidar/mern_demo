import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import Child from './Child';
export default class First extends Component {
    render() {
        return (
            <div>
                <Alert color="primary" >
                    This is a primary alert — check it out!
                    <a href="#">Alert</a>
                </Alert>
                <div className="alert alert-primary">
                    This is Primary alert!
                </div>
                <h1>This is my First Component</h1>
                <h2>Title: {this.props.title}</h2>
                <Child></Child>
            </div>
        )
    }
}

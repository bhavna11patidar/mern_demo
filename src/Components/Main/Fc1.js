import React from 'react'

export default function Fc1(props) {
    return (
        <div>
            <h1>This is a functional Compenet</h1>
            <h1>Title: { props.title}</h1>
            <h2>Name: {props.name}</h2>
        </div>
    )
}

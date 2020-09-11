import React, { Component } from 'react'

export default class TestFun extends Component {

    test=()=>{
        console.log("Test");
    }
    

    abc(a,b){
        console.log(a);
        console.log(b);
    }
    render() {
        const name="Bhavna";
        return (
            <div>
             <h1>Welcome {name}</h1> 
             <button onClick={this.test}>Click Me</button>
             <button onClick={this.abc.bind(this,10,30)}>Click para</button>
            </div>
        )
    }
}

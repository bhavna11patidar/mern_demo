import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            mobile:"",
        }
        this.onHandleChange=this.onHandleChange.bind(this);
    }

    onHandleChange(e){
      // this.setState({name:e.target.value});
      this.setState({
          [e.target.name]:e.target.value,
      })
    }

    onRegister=()=>{
        console.log(this.state);
    }

    render() {
        const {name,email,mobile}=this.state;
        return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                <div>Welcome {name}</div>
                <div>Email:{email}  Mobile:{mobile}</div>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" value={name} onChange={this.onHandleChange}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" name="email" className="form-control" value={email} onChange={this.onHandleChange}/>
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="text" name="mobile" value={mobile} className="form-control" onChange={this.onHandleChange}/>
                </div>
                <div className="text-center">
                    <button onClick={this.onRegister}>Submit</button>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

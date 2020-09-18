import React, { Component } from 'react'

export default class toDoListState extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            title:"",
            data:[],
        }
    }

    onHandleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    onButtonClick=()=>{
        //console.log(this.state);
        var newData=this.state.data.concat({name:this.state.name, title:this.state.title});
        this.setState({data:newData});

    }
     OnDeleteClick(a){
         this.setState({
             data:this.state.data.filter((d,i)=>{return i!=a;}),
         })
    }
    render() {
        const {name,title,data}=this.state;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                <div className="form-group col-md-3">
                    <input className="form-control" type="text" name="name" value={name} onChange={this.onHandleChange}></input>
                </div>
                <div className="form-group col-md-3">
                    <input className="form-control" type="text" name="title" value={title} onChange={this.onHandleChange}></input>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-info" onClick={this.onButtonClick}>Add</button>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th>S. No</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.map((d,i)=>(
                            <tr>
                                <td>{i+1}</td>
                                <td>{d.name}</td>
                                <td>{d.title}</td>
                                <td><button className="btn btn-danger" onClick={this.OnDeleteClick.bind(this,i)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

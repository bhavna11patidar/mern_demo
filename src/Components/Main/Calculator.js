import React, { Component } from 'react'
import {Input,FormGroup} from 'reactstrap';
export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state={
            cal:0,
        }
        this.onHandleChange=this.onHandleChange.bind(this);
    }
    i=0;
    calculate(x){
        //console.log(x);
        if(x=="="){
            this.setState({cal:eval(this.state.cal)})
        }else if(x=="C"){
            this.setState({cal:0})
        }else if(this.i==0){
            this.setState({
                cal:x,
            })
        }else{
            this.setState({
                cal:this.state.cal+x,
            })
        }
        this.i++;
    }

    onHandleChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    render() {
        const val=this.state.cal;
        return (
            <div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5 text-center bg-light py-5">
                            <div className="mb-3 bg-dark p-2 text-center text-white">
                                <h1>Basic Calculator</h1>
                            </div>
                            <FormGroup>
                                <Input 
                                type="text"
                                name="cal"
                                value={val}
                                onChange={this.onHandleChange}
                                />   
                             </FormGroup> 
                            <button onClick={this.calculate.bind(this,'1')} className="btn btn-lg calc_btn">1</button>
                            <button onClick={this.calculate.bind(this,"2")} className="btn btn-lg calc_btn">2</button>
                            <button onClick={this.calculate.bind(this,"3")} className="btn btn-lg  calc_btn">3</button>
                            <button onClick={this.calculate.bind(this,'+')} className="btn btn-lg calc_btn">+</button>
                            <br/>
                            <button onClick={this.calculate.bind(this,"4")} className="btn btn-lg calc_btn">4</button>
                            <button onClick={this.calculate.bind(this,"5")} className="btn btn-lg calc_btn">5</button>
                            <button onClick={this.calculate.bind(this,"6")} className="btn btn-lg calc_btn">6</button>
                            <button onClick={this.calculate.bind(this,'-')} className="btn btn-lg calc_btn">-</button>
                            <br/>
                            <button onClick={this.calculate.bind(this,"7")} className="btn btn-lg calc_btn">7</button>
                            <button onClick={this.calculate.bind(this,"8")} className="btn btn-lg calc_btn">8</button>
                            <button onClick={this.calculate.bind(this,"9")} className="btn btn-lg calc_btn">9</button>
                            <button onClick={this.calculate.bind(this,'*')} className="btn btn-lg calc_btn">*</button>
                            <br/>
                            <button onClick={this.calculate.bind(this,"=")} className="btn btn-lg calc_btn">=</button>
                            <button onClick={this.calculate.bind(this,"0")} className="btn btn-lg calc_btn">0</button>
                            <button onClick={this.calculate.bind(this,'C')} className="btn btn-lg calc_btn">C</button>
                            <button onClick={this.calculate.bind(this,'/')} className="btn btn-lg calc_btn">/</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

const HocCouter=(WrappedComponent, number=1)=>{
class HocCouter extends Component {
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    _onButtonClick=()=>{
            this.setState({count:this.state.count+number});
    }
    render() {
        const {count}=this.state
        return (
            <div>
                <WrappedComponent onButtonClick={this._onButtonClick} count={count}></WrappedComponent>
            </div>
        )
    }
}
    return HocCouter 
}

export default HocCouter;
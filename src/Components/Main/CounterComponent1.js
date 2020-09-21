import React, { Component } from 'react';
import HocCouter from './HocCouter';

class CounterComponent1 extends Component {
    render() {
        const {count, onButtonClick}=this.props;
        return (
            <div>
                <button onClick={onButtonClick}>You have clicked {count}</button>
            </div>
        )
    }
}
export default HocCouter(CounterComponent1,5);

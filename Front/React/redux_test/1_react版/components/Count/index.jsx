import React, {Component} from 'react';

class Count extends Component {

    state = {count: 0}

    increment = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count + value*1})
    }
    decrement = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count - value*1})
    }
    incrementIfOld = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        if(count % 2 !== 0) {
            this.setState({count: count + value*1})
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        setTimeout(() => {
            this.setState({count: count + value*1})
        },500)
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>&nbsp;
                <select ref={c => this.selectNumber = c}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOld}>当前求和为奇数+</button>&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        );
    }
}

export default Count;
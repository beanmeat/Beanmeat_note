import React, {Component} from 'react';
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction} from "../../redux/count_action";

class Count extends Component {

    // componentDidMount() {
    //     // 检测redux中状态的变化，只要变化，就调用render重新渲染；
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }
    incrementIfOld = () => {
        const {value} = this.selectNumber
        const count = store.getState()
        if(count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1))
        },500)
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>&nbsp;
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
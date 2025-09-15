import React, {Component} from 'react';
// 引入store
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";
// 引入connect用于链接UI跟redux
import {connect} from "react-redux";

class Count extends Component {


    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value * 1)
    }
    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value * 1)
    }
    incrementIfOld = () => {
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.jiaAsync(value * 1,500)
    }
    render() {

        return (
            <div>
                <h2>当前求和为：{this.props.count}</h2>&nbsp;
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


export default connect (
    state => ({count: state}),
    // mapDispatchToProps的一般写法
    // dispatch => ({
    //         jia: number => dispatch(createIncrementAction(number)),
    //         jian: number => dispatch(createDecrementAction(number)),
    //         jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time)),
    //     })

    // mapDispatchToProps
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(Count)
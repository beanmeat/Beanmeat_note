import React, {Component} from 'react';
import './index.css'

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }
    render() {
        const {todos} = this.props

        const doneCount = todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0)
        const total = todos.length

        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
                    </label>
                    <span>
                      <span>已完成{doneCount}</span> / 全部{total}
                    </span>
                    <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
                </div>
            </div>
        );
    }
}
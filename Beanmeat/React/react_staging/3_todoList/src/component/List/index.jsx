import React, {Component} from 'react';
import Item from '../Item';
import './index.css'
import PropTypes from "prop-types";

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        updateTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map(todo => {
                            return <Item deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id} {...todo}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}
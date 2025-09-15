import React, {Component} from 'react'
import './App.css'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

export default class App extends Component {

    state = {
        todos:[
            {id: '001', name: 'react', done: true},
            {id: '002', name: 'vue', done: true},
            {id: '003', name: 'less', done: false}
        ]
    }

    addTodo = (todoObj) => {
        const {todos} = this.state
        const newTodo = [todoObj,...todos]
        this.setState({todos: newTodo})
    }

    updateTodo = (id,done) => {
        const {todos}  = this.state
        const newTodos = todos.map(todo => {
            if(todo.id === id) return {...todo,done}
            else return todo;
        })
        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter(todo => {
            return todo.id != id
        })
        this.setState({todos: newTodos})
    }

    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map(todo => {
            return {...todo,done}
        })
        this.setState({todos: newTodos})
    }

    clearAllDone = (todo) => {
        const {todos} = this.state
        const newTodos = todos.filter(todo => {
            return !todo.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                    </div>
                </div>
            </div>
        )
    }
}

import React, {Component} from 'react';
import './index.css'

export default class Item extends Component {
    state = { mouse: false }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id,event.target.checked)
        }
    }

    handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this note?")){
            this.props.deleteTodo(id)
        }

    }

    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <div>
                <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" onChange={this.handleCheck(id)} checked={done}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={() => {this.handleDelete(id)}} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
                </li>
            </div>
        );
    }
}
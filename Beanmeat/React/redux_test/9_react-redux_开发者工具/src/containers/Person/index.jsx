import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person"

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age }
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h2>Person Component,up Component Count: {this.props.count}</h2>
                <input ref={c => this.nameNode = c} placeholder="name"/>
                <input ref={c => this.ageNode = c} placeholder="age"/>
                <button onClick={this.addPerson}>add</button>
                <ul>
                    {
                        this.props.person.map(p => {
                            return <li key={p.id}>{p.name} -- {p.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({person: state.person,count: state.count}),
    {
        addPerson:createAddPersonAction,
    }
)(Person)
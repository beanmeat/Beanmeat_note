import React, {Component} from 'react'
import './App.css'
import Search from './component/Search'
import List from './component/List'

export default class App extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }

    render() {

        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <List {...this.state}{...this.state}/>
                </div>
            </div>
        )
    }
}

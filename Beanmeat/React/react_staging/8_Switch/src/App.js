import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './components/Header'
import BeanmeatNavLink from "./components/BeanmeatNavLink";
import './App.css'

export default class App extends Component {

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*<a className="list-group-item active" href="./About.html">About</a>*/}
                            {/*<a className="list-group-item" href="./Home.html">Home</a>*/}
                            <BeanmeatNavLink to='/about'>About</BeanmeatNavLink>
                            <BeanmeatNavLink to='/home'>Home</BeanmeatNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*通常情况下，path和component是一一对应的关系，Switch可以提高路由匹配效率（单一匹配）*/}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    <Route path="/home" component={Test} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

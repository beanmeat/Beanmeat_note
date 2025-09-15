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
                            <BeanmeatNavLink to='/beanmeat/about'>About</BeanmeatNavLink>
                            <BeanmeatNavLink to='/beanmeat/home'>Home</BeanmeatNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path='/beanmeat/about' component={About} />
                                    <Route path='/beanmeat/home' component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

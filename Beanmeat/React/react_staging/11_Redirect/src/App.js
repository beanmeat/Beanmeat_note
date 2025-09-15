import React, {Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
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
                            <BeanmeatNavLink to='/about'>About</BeanmeatNavLink>
                            <BeanmeatNavLink to='/home'>Home</BeanmeatNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route exact={true} path='/about' component={About} />
                                    <Route exact={true} path='/home' component={Home} />
                                    {/*如果匹配不上,重定向*/}
                                    <Redirect to="/about"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

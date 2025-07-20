import React, {Component} from 'react';
import BeanmeatNavLink from '../../components/BeanmeatNavLink'
import {Redirect, Route, Switch} from "react-router-dom";
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <ul className="nav nav-tabs">
                    <li>
                        <BeanmeatNavLink to="/home/news">News</BeanmeatNavLink>
                    </li>
                    <li>
                        <BeanmeatNavLink to="/home/message">Message</BeanmeatNavLink>
                    </li>
                </ul>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/message" component={Message}/>
                    <Redirect to="/home/news"/>
                </Switch>
            </div>
        );
    }
}
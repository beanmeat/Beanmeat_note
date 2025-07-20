import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class BeanmeatNavLink extends Component {
    render() {
        /**
         * 标签体内容是一个特殊的标签属性，可以在this.props中获取key是children
         */
        return (
            <NavLink activeClassName="beanmeat" className="list-group-item" {...this.props}/>
        );
    }
}
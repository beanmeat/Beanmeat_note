import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className="row">
                {
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                        users.map((userObj)=>{
                            return (
                                <div key={userObj.id} className="card">
                                    <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                        <img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}

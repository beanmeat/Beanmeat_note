import React, {Component} from 'react';
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        //发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        const {keyWordElement: {value : keyWord}} = this
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error => {
                //请求失败后通知App更新状态
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref={c => this.keyWordElement = c} placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}
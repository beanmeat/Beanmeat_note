import React, {Component} from 'react';

const DetailData = [
    {id: '01', content: 'hello,React'},
    {id: '02', content: 'hello,Vue'},
    {id: '03', content: 'hello,Js'},
]
class Detail extends Component {
    render() {
        // 接收params参数
        // const { id,title } = this.props.match.params;

        // 接收search参数
        // const {search} = this.props.location
        // const {id,title} = qs.parse(search.slice(1))

        // 接收state参数
        const { id,title } = this.props.location.state || {}
        const findResult = DetailData.find(obj => obj.id === id) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        );
    }
}

export default Detail;
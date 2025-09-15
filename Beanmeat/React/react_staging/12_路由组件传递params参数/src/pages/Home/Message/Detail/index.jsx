import React, {Component} from 'react';
import qs from 'qs'

const DetailData = [
    {id: '01', content: 'hello,React'},
    {id: '02', content: 'hello,Vue'},
    {id: '03', content: 'hello,Js'},
]
class Detail extends Component {
    render() {
        // 接受params参数
        const { id,title } = this.props.match.params;

        const findResult = DetailData.find(obj => obj.id === id)
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
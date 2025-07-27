import React, {useState} from "react";
import {Link, Outlet,useNavigate} from "react-router-dom";

export default function Message () {
    const [messages] = useState([
        {id: '001','title': 'Vue', content: 'Vue_content'},
        {id: '002','title': 'React', content: 'React_content'},
        {id: '003','title': 'Html', content: 'Html_content'},
        {id: '004','title': 'Css', content: 'Css_content'}
    ])
    const navigate = useNavigate();
    function showDetail (m) {
        navigate('detail',{
            replace: false,
            state: {
                id: m.id,
                title: m.title,
                content: m.content
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    messages.map(m => {
                        return (
                            <li key={m.id}>
                                <Link
                                    to="detail"
                                    state={{
                                        id:m.id,
                                        title:m.title,
                                        content:m.content,
                                    }}
                                >{m.title}</Link>&nbsp;&nbsp;
                                <button onClick={() => showDetail(m)}>detail</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            {/*指定路由组件的展示位置*/}
            <Outlet/>
        </div>
    )
}
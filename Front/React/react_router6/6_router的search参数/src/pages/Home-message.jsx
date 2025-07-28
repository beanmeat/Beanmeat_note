import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";

export default function Message () {
    const [messages] = useState([
        {id: '001','title': 'Vue', content: 'Vue_content'},
        {id: '002','title': 'React', content: 'React_content'},
        {id: '003','title': 'Html', content: 'Html_content'},
        {id: '004','title': 'Css', content: 'Css_content'}
    ])
    return (
        <div>
            <ul>
                {
                    messages.map(m => {
                        return (
                            <li key={m.id}>
                                <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
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
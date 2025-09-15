import {Navigate} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/Home-news";
import Message from "../pages/Home-message";
import Detail from "../pages/Home-message-detail";

const routes = [
    {
        path: 'about',
        element: <About/>
    },
    {
        path: 'home',
        element: <Home/>,
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>,
                children: [
                    {
                        path: 'detail/:id/:title/:content',
                        element:<Detail/>
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about" />
    }
]

export default routes
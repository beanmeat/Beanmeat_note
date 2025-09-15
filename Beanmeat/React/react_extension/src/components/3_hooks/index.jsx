import React from 'react';
import ReactDOM from 'react-dom';


// 类式组件
// class Demo extends React.Component {
//     state = {count: 0}
//
//     myRef = React.createRef();
//
//     add = () => {
//         this.setState((state,props) => ({count: state.count + 1}))
//     }
//
//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//     }
//
//     show = () => {
//         console.log(this.myRef.current.value)
//     }
//
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({count: state.count + 1}));
//         },1000)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }
//
//     render() {
//         return (
//             <div>
//                 <h3>Current sum is: {this.state.count}</h3>
//                 <input type="text" ref={this.myRef}></input>
//                 <button onClick={this.add}>click me add 1</button>
//                 <button onClick={this.unmount}>unmount Component</button>
//                 <button onClick={this.show}>show date</button>
//             </div>
//         );
//     }
// }

// 函数式组件
function Demo () {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('state hooks');
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1);
        },1000)
        return () => {clearInterval(timer);}
    },[])
    const myRef = React.useRef()

    function add() {
        setCount(count => count +  1);
    }
    function changeName () {
        setName('hooks')
    }
    function unmount () {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    function show () {
        console.log(myRef.current.value);
    }

    return (
            <div>
                <h3>Current sum is: {count}</h3>
                <h3>Current name is: {name}</h3>
                <input type="text" ref={myRef}></input>
                <button onClick={add}>click me add 1</button>
                <button onClick={changeName}>click me change Info</button>
                <button onClick={unmount}>unmount Component</button>
                <button onClick={show}>show date</button>
            </div>
    )
}
export default Demo;
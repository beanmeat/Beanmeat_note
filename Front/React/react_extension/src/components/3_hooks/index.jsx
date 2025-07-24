import React, {Component} from 'react';

// 类式组件
// class Demo extends Component {
//     state = {count: 0}
//
//     add = () => {
//         this.setState((state,props) => {
//             this.setState({count: state.count + 1});
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <h3>Current sum is: {this.state.count}</h3>
//                 <button onClick={this.add}>click me add 1</button>
//             </div>
//         );
//     }
// }

// 函数式组件
function Demo () {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('state hooks');

    function add() {
        setCount(count + 1);
    }
    function changeName () {
        setName('hooks')
    }

    return (
            <div>
                <h3>Current sum is: {count}</h3>
                <h3>Current name is: {name}</h3>
                <button onClick={add}>click me add 1</button>
                <button onClick={changeName}>click me change Info</button>
            </div>
    )
}
export default Demo;
import React, {Component} from 'react';
import './index.css'

// 创建context对象
const MyContext = React.createContext()
class A extends Component {
    state = {name: 'Beanmeat',age: 18}
    render() {
        const {name,age} = this.state
        return (
            <div className="A">
                <h3>A name: {name}, age: {age}</h3>
                <MyContext.Provider value={{name,age}}>
                    <B/>
                </MyContext.Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="B">
                <h3>B Component</h3>
                <C/>
            </div>
        )
    }
}

// class C extends  Component {
//     static contextType = MyContext
//     render() {
//         console.log(this.context)
//         const {name,age} = this.context
//         return (
//             <div className="C">
//                 <h3>C Component: {name},{age}</h3>
//             </div>
//         )
//     }
// }

function C() {
    return (
        <div className="C">
            <h3>C Component:
                <MyContext.Consumer>
                    {value => `${value.name},${value.age}`}
                </MyContext.Consumer>
            </h3>
        </div>
    )
}
export default A;
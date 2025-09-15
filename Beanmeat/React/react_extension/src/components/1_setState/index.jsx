import React, {Component} from 'react';

class Demo extends Component {
    state = {count: 0}

    add = () => {
        // const {count} = this.state
        // this.setState({count: count + 1},() => {
        //     console.log(this.state.count)
        // })

        this.setState((state,props) => {
            return {count: state.count + 1}
        })
    }
    render() {
        const {count} = this.state;
        return (
            <div>
                <h3>Current sum is: {count}</h3>
                <button onClick={this.add}>click me add 1</button>
            </div>
        );
    }
}

export default Demo;
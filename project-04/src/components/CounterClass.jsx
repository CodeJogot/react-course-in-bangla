import React, { Component } from 'react'

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    increment = () => {
        this.setState({counter: this.state.counter+1})
    }

  render() {
    return (
      <>
      <h1>Counter: {this.state.counter}</h1>
      <button onClick={this.increment}>Click Me</button>
      </>
    )
  }
}


export default CounterClass;
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Timer updated:", this.state.seconds);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("Timer cleared");
  }

  render() {
    return <h1>Seconds: {this.state.seconds}</h1>;
  }
}

export default Timer;
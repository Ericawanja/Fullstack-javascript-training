import React, { Component } from "react";

export class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("mounting");
    this.time = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState, this.state)
  }
  componentWillUnmount() {
    console.log("unmounting");
    clearInterval(this.time);
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Stopwatch;

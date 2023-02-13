import React, { Component } from "react";

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log("The component has been mounted");
    // console.log(new Date());
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevState, this.state.date);
  }
  componentWillUnmount() {
    console.log("The timer is unmounting");
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="stopwatch">
        <span className="title">stopwatch</span>
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}

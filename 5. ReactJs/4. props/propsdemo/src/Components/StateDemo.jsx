import React, { Component } from "react";

export class StateDemo extends Component {
  constructor() {
    super();
    this.state = { topic: "Reading State in ReactJs", clicks: 0 };
  }
  handleClick = () => {
    this.setState({ topic: "Done reading state in reactJs" });
  };

  handleIncrement = () => {
    this.setState((prev) => {
        console.log(prev)
      return {...prev, clicks:prev.clicks + 1};
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.topic}</h1>
        <button onClick={this.handleClick}>Mark done</button>
        <h2 onClick={this.handleIncrement}>
          You clicked {this.state.clicks} times
        </h2>
      </div>
    );
  }
}

export default StateDemo;

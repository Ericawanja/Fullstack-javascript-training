import React, { Component } from "react";
import Greet from "./Greet";
import MouseCounter from "./MouseHoverCounter";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleDecrement() {
    // this.setState({ count: 5 });
  }
  handleIncrement() {
    // this.setState({count:10});
    this.setState((prev) => {
     return {count:prev.count + 1}
    });
  }

  render() {
    return (
      <div className="counter">
        <Greet  greetings= {`Good morning`}/>
        <span className="value">{this.state.count}</span>
        <span className="btns">
          <button onClick={this.handleIncrement}> + </button>
          <button onClick={this.handleDecrement}> - </button>
        </span>

        <MouseCounter counter ={this.state.count} />
      </div>
    );
  }
}

export default Counter;

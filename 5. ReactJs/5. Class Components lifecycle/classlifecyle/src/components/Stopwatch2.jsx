import React, { Component } from "react";

export class Stopwatch2 extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount(){
    this.timerID = setInterval(() => {
        //logic
        this.setState({date:new Date()})
    }, 1000);
    console.log("added the timer")
  }
  componentDidUpdate(prevProps, prevState){
    console.log(prevState, this.state)

  }
  componentWillUnmount(){
    //unsubscribe from the subscribed resources
    clearInterval(this.timerID)
    console.log("removed the timer")
  }
  render() {
    return (
      <div>
        <h1>The current time is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Stopwatch2;

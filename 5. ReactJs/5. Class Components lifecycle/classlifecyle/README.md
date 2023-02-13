import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
        console.log('unmounting')
      clearInterval(timerId);
    };
  }, []);
  return <div>{time.toLocaleTimeString()}</div>;
}

export default Clock;


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

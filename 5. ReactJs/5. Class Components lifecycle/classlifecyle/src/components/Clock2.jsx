import React, { useState, useEffect } from "react";

function Clock2() {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(0);
  const [time, setTime] = useState(new Date())

  let handleClick = () => setCount((prev) => prev + 1);
  let handleHover = () => setHover((prev) => prev + 1);

  //useEffect(callback, parameters)
  useEffect(() => {
    // let timerID = setInterval(()=>{
    //   setTime(new Date())
    // }, 1000)
    // return ()=>{
    //   //component will unmount - undo the subscriptions
    //   clearInterval(timerID)
    // }
    console.log('The useEffect method was invoked')
  }, [count]);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <h1>r count is {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <h2 onMouseOver={handleHover}>You have hovered on me {hover} times</h2>
    </div>
  );
}

export default Clock2;

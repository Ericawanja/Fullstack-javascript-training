import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState({ date: new Date() });
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timerID = setInterval(() => {
      setTime({ date: new Date() });
    }, 1000);

    return ()=>{
        clearInterval(timerID)
    }
  }, []);

  return (
    <div className="clock">
      <span className="title">stopwatch</span>
      <span>{time.date.toLocaleTimeString()}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
}

export default Clock;

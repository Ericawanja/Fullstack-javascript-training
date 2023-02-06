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

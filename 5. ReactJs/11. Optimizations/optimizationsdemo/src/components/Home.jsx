import React from "react";

function Home() {
  const handleClick = () => {
    console.log("handling click");
  };
  return (
    <div>
      Home
      <h1>This is the home component we will demo the useCallback</h1>
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}

export default Home;

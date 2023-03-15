import React, { useEffect, useState } from "react";

function Home({ initial }) {
  const [value, setValue] = useState(initial);
  const handleClick = () => {
    console.log("handling click");
  };
  useEffect(()=>{
    console.log('home rerendering')
  })
  return (
    <div>
      Home
      <h1>This is the home component we will demo the useCallback</h1>
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}

export default React.memo(Home);
// export default Home

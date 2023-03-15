import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Data from "./components/Data";
import Home from "./components/Home";

function App() {
  const [state, setState] = useState("1");
  const [title, setTitle] = useState("title");
  const array = useMemo(()=>[1,2,3,4,5,5], []) 
  useEffect(()=>{
    console.log("the array changed")
  }, [array])
  return (
    <div className="App">
      {/* <button onClick={() => setState((s) => +s + 1)}>{state}</button>
      <h1>{title}</h1>
      <button
        onClick={() => setTitle((t) => (t === "title" ? "New Title" : "title"))}
      > change the title</button> */}
      {/* <Home />
      <Counter /> */}
      <Data/>
    </div>
  );
}

export default App;

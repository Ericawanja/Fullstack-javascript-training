import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  console.log(count);
  const [input, setInput] = useState(1);
  const handleChange = (e) => {
    setInput(+e.target.value)
  };
  return (
    <div className="App">
      <h1>A simple counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick = {()=>dispatch({type:'incrementBy', payload: {input}})}>Increment by</button>
    </div>
  );
}

export default App;

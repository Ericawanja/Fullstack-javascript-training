import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
  
    return state;
  });
  console.log(data);

  return (
    <div className="App">
      <h1>{data.counter}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default App;

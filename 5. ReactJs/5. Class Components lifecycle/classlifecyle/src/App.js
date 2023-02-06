import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Stopwatch />
      <Clock/>
    </div>
  );
}

export default App;

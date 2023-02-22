import "./App.css";
import { data } from "./Components/data";
import Header from "./Components/Header";
import Main from "./Components/Main";
import StateDemo from "./Components/StateDemo";

function App() {
  return (
    <div className="App">
      <Main  userdata={data} greetings= {"Good morning"} />
      <Header menu ={['Destinations', 'About', 'Technology', 'Crew']}/>
      <StateDemo/>
    </div>
  );
}

export default App;

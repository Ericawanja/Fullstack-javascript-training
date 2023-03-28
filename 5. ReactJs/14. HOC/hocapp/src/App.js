
import './App.css';
import Counter from './components/counter';
import Hover from './components/hover';
import withValue from './components/withCounter';
const NewCounter = withValue(Counter)
const NewHover = withValue(Hover)
function App() {
  return (
    <div className="App">
      <NewCounter/>
      <h1>Hoc</h1>
      <NewHover/>

     
    </div>
  );
}

export default App;

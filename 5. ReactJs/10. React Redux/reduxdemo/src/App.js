import  {useDispatch, useSelector } from 'react-redux'
import './App.css';

function App() {
  const dispatch = useDispatch()
  // const data = useSelector(state=>state)
  // console.log(data)

  return (
    <div className="App">
     <h1>0</h1>
     <button onClick={()=>dispatch({type:'increment'})}>+</button>
    </div>
  );
}

export default App;

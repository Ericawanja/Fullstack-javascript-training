import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Greet from './components/Greet';

function App() {
  let menu = ['Home', 'About', 'Contact', 'Services']
  let columns = ['Company', "Careers", "contacts"]
  return (
    <div className="App">
      
      {/* <Navbar menu= {menu}/>
     
      <Footer user= 'Erick'/>
      <Footer columns = {columns}/> */}

      <Counter/>
     
    </div>
  );
}

export default App;

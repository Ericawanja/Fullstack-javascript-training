import React from "react";
import Details from "./components/Details";
import Header from "./components/Header";

class App extends React.Component {
  constructor(){
    super()
    this.state ={username:'Frank'}
  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <Header />
        <Details />
      </div>
    );
  }
}

export default App;

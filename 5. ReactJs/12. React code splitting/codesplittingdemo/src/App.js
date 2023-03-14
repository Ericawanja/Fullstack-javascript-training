import React, { Suspense } from "react";
import "./App.css";


import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const Store = React.lazy(()=>import("./components/Store"))
const About = React.lazy(()=>import("./components/About"))
function App() {
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

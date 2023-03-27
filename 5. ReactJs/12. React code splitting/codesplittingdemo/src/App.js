import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";

import { Suspense } from "react";

const isAdmin = false
const About = React.lazy(() => import("./components/About"));
const Store = React.lazy(()=>import ("./components/Store"))
const Contact = React.lazy(()=>import ("./components/Contact").then(module=>{
  return {default: module.ContactFeature}
}))

const Admin = React.lazy(()=> import ("./components/Admin"))

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Suspense fallback={<h1>Loading ....</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/admin" element={isAdmin ? <Admin/> :<h1>The resource is not available</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

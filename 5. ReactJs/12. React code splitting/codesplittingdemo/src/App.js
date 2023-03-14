import React, { Suspense, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";


const Home = React.lazy(() => import("./components/Home"));
const Store = React.lazy(() => import("./components/Store"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() =>
  import("./components/Contact").then((module) => {
    return { default: module.ContactComponent };
  })
);
function App() {
  const [isAdmin, setIAdmin] = useState(false);
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route
            path="/contact"
            element={
              isAdmin ? <Contact /> : <h1>You cannot acces this page</h1>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

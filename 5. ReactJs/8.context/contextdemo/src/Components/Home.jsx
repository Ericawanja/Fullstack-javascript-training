import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Footer from "./Footer";
import "./styles.css";

function Home() {
  let { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>This is the home Component</h1>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Toggle Theme
      </button>
      <Footer/>
    </div>
  );
}

export default Home;

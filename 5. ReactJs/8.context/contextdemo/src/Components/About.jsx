import React, { useContext } from "react";
import { ThemeContext } from "../App";

function About() {
    let {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <h2>This is the about component </h2>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default About;

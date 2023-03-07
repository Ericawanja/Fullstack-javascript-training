import React, { Component } from "react";
import { ThemeContext } from "../App";

export class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, setTheme}) => {
            console.log(setTheme)
          return <div className={theme}>
            <h1>Home in class components</h1>
            <button
              onClick={() =>
                setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              }
            >
              Toogle theme
            </button>
          </div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default About;

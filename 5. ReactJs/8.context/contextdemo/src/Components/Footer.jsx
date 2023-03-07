import React, { Component } from "react";
import { ThemeContext } from "../App";

export class Footer extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => {
          return (
            <div className={theme}>
              <h3>This is the footer</h3>
              <button
                onClick={() =>
                  setTheme((prev) => (prev === "light" ? "dark" : "light"))
                }
              >
                Toggle Theme
              </button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Footer;

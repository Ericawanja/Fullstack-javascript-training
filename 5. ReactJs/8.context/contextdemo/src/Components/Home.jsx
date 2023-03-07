import React, { useContext } from "react";
import { ThemeContext } from "../App";
import "./styles.css";

function Home() {
  let { theme, setTheme } = useContext(ThemeContext);
  const handleToggle = () => {

    setTheme(prev=> prev ==='dark'?"light":'dark');
  };
  return (
    <div className={theme}>
      <h1>Home</h1>
      <button onClick={handleToggle}>Toogle theme</button>
    </div>
  );
}

export default Home;

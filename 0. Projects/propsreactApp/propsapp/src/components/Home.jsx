import React from "react";
import "./styles.css";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="logo">logo</div>
        <div className="nav">
          <span>00. Home</span>
          <span>01. Destination</span>
          <span>02. Crew</span>
          <span>03. Technology</span>
        </div>
      </div>
      <div className="main">
        <div className="left">
          <div className="leftContainer">
            <span className="firstP">So, you want to travel to</span>
            <span className="secondP">SPACE</span>
            <span className="thirdP">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </span>
          </div>
        </div>
        <div className="right">
          <span>Explore</span>
        </div>
      </div>
    </div>
  );
}

export default Home;

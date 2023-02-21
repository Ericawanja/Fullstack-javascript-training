import React from "react";
import Footer from "./Footer";

class Header extends React.Component {
    
  render() {
    return (
      <div>
        <h1>This is the header component</h1>
        <Footer/>
      </div>
    );
  }
}
export default Header;

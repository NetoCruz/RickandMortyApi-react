import React, { Component } from "react";
import "./styles/navbar.css";
import Logo from "../images/rick.png";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <img src={Logo} />
      </div>
    );
  }
}

export default Navbar;

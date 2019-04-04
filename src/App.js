import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Personajes from "./components/Personajes";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Personajes />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Gallery />
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="Hoose">
        <Header />
        {Routes}
      </div>
    );
  }
}

export default App;

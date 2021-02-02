import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchJobs from "./components/SearchJobs";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchJobs />
      </div>
    );
  }
}

export default App;

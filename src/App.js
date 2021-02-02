import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchJobs from "./components/SearchJobs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobDetails from "./components/JobDetails";

export class App extends Component {
  state = {
    jobs: [],
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/">
            <SearchJobs
              setJobs={(jobResults) => this.setState({ jobs: jobResults })}
              jobs={this.state.jobs}
            />
          </Route>

          <Route path="/details/:id">
            <JobDetails jobs={this.state.jobs} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;

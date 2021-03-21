import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class JobDetails extends Component {
  render() {
    // find the job that matches with the params id
    // the id comes from the  Route "/details/:id" that needs the withRouter to wrap this
    // component to a higher order component App.js in n this case
    const job = this.props.jobs.find(
      (job) => job.id === this.props.match.params.id
    );

    return job ? (
      <div>
        <h1>{job.company}</h1>
        <img
          src={job.company_logo}
          alt="comapany-logo"
          style={{ width: "20em" }}
        />
        <h3>{job.title}</h3>
        <h5>{job.type}</h5>
        <h4>{job.location}</h4>
        <a href="https://jobs.github.com/positions/e1d550f5-8ffd-4987-8d51-5bc3669f0605">
          <h6>Go to the official job offer</h6>
        </a>
        <a href="http://humanoo.com">
          <h6>Find more about us</h6>
        </a>
      </div>
    ) : (
      <div>404 job not found</div>
    );
  }
}

export default withRouter(JobDetails);

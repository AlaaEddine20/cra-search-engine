import React, { Component } from "react";
import { Spinner, Form, Button, Row, Col } from "react-bootstrap";
import JobCard from "./Jobs";
import { withRouter } from "react-router-dom";

export class SearchJobs extends Component {
  state = {
    position: "",
    location: "",
    isLoading: false,
    selectedJob: null,
  };

  handleSelectedJob = (id) => this.setState({ selectedJob: id });

  onKeywordChange = (e) => {
    this.setState({ potition: e.target.value });
  };

  onLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };

  clearFields = () => {
    this.setState({ location: "", position: "" });
  };

  searchJobs = (e) => {
    e.preventDefault();
    let position = this.state.position;
    let location = this.state.location;
    // encoding the values written by the user
    position = encodeURIComponent(position.trim());
    location = encodeURIComponent(location.trim());
    // api url
    const api = `https://jobs.github.com/positions.json?description=${position}&location=${location}`;
    const url = "https://jsonp.afeld.me/?url=" + encodeURIComponent(api);

    // user is searching now
    this.setState({ isLoading: true });

    // fetch
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jobResults) => {
        console.log(jobResults);
        this.setState({ isLoading: false });
        this.props.setJobs(jobResults);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { keywords, location, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Form className="container-lg d-flex flex-column">
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Job Position</Form.Label>
                  <Form.Control
                    value={keywords}
                    onChange={this.onKeywordChange}
                    type="text"
                    required
                  />
                  <Form.Text className="text-muted">
                    For example: Web developer..
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={location}
                onChange={this.onLocationChange}
                type="text"
                required
              />
            </Form.Group>
            <Row className="mx-auto">
              <Col md={6}>
                <Button
                  onClick={this.searchJobs}
                  variant="primary"
                  type="submit"
                >
                  Search
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  onClick={this.clearFields}
                  variant="secondary"
                  type="submit"
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>
        )}
        <JobCard
          selectedJob={this.state.selectedJob}
          handleSelectedJob={this.handleSelectedJob}
          jobs={this.props.jobs}
        />
      </>
    );
  }
}

export default withRouter(SearchJobs);

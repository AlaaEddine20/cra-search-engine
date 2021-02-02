import React, { Component } from "react";
import { Spinner, Form, Button, Row, Col } from "react-bootstrap";
export class SearchJobs extends Component {
  state = {
    position: "",
    positionError: false,
    location: "",
    locationError: false,
    isLoading: false,
    jobs: [],
  };

  onKeywordChange = (e) => {
    this.setState({ potition: e.target.value });
  };

  onLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };

  clearFields = () => {
    this.setState({ location: null, potition: "", jobs: null });
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
      .then((res) => {
        console.log(res);
        this.setState({ jobs: res, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { keywords, location } = this.state;
    return (
      <>
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
          <Row>
            <Col>
              <Button onClick={this.searchJobs} variant="primary" type="submit">
                Search
              </Button>
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
      </>
    );
  }
}

export default SearchJobs;

import React, { Component } from "react";
import { Spinner, Form, Button, Row, Col } from "react-bootstrap";
export class SearchJobs extends Component {
  state = {
    keywords: "",
    keywordsError: false,
    location: "",
    locationError: false,
    isSearching: false,
    jobs: null,
  };

  onKeywordChange = (e) => {
    this.setState({ keywords: e.target.value });
  };

  onLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };

  clearFields = () => {
    this.setState({ location: null, keywords: "", jobs: null });
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
            />
          </Form.Group>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Search
              </Button>
              <Button variant="secondary" type="submit">
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

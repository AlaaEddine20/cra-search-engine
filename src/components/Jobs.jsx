import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class JobCard extends Component {
  render() {
    return (
      <div>
        {this.props.jobs.map((job) => (
          <Row>
            <Col>
              <Card
                key={job.id}
                className="bg-dark text-white mt-5 p-3 card mx-auto"
              >
                <Card.Title>{job.company}</Card.Title>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>{job.location}</Card.Text>

                  <Link to={"/details/" + job.id}>
                    <Button variant="secondary">More details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}

export default JobCard;

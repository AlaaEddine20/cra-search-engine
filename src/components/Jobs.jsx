import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const JobCard = (props) => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      {props.jobs.map((job) => (
        <Row>
          <Col>
            <Card className="bg-dark text-white mt-5 p-3 card mx-auto">
              <Card.Title>{job.company}</Card.Title>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>{job.location}</Card.Text>
                <Button onClick={() => job.id} variant="secondary">
                  More details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default JobCard;

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
const Accorions = () => {
  return (
    <div className="divcontainer">
      <Container>
        <Row>
          <Col md="6">
            <div className="colorbgaccordion">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Which solar panels does Solarsense install?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, despite the removal of the government feed-in tariff,
                    installations are expected to continue at the current rate
                    and even increase in 2023.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    solar panels now that the Feed-in Tariff has closed?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, despite the removal of the government feed-in tariff,
                    installations are expected to continue at the current rate
                    and even increase in 2023.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What solar panels do Solarsense install?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, despite the removal of the government feed-in tariff,
                    installations are expected to continue at the current rate
                    and even increase in 2023.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How to Add Battery Backup to an Existing?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, despite the removal of the government feed-in tariff,
                    installations are expected to continue at the current rate
                    and even increase in 2023.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>

          <Col md="6">
            <div className="colorbgform">
              <MDBValidation
                noValidate
                id="form"
                className="text-center"
                style={{ width: "100%", maxWidth: "800px" }}
              >
                <h2>Request A Quote</h2>

                <MDBValidationItem invalid feedback="Please provide your name.">
                  <MDBInput
                    label="Monthly electric usage in kWh?"
                    v-model="name"
                    wrapperClass="mb-2 pt-4"
                    required
                  />
                </MDBValidationItem>

                <MDBValidationItem
                  invalid
                  feedback="Please provide your email."
                >
                  <MDBInput
                    type="email"
                    label="Solar panels place"
                    v-model="email"
                    wrapperClass="mb-2"
                    required
                  />
                </MDBValidationItem>

                <MDBValidationItem
                  invalid
                  feedback="Please provide mail subject."
                >
                  <MDBInput
                    label="Materials on your roof"
                    v-model="subject"
                    wrapperClass="mb-2"
                    required
                  />
                </MDBValidationItem>

                <MDBValidationItem
                  invalid
                  feedback="Please provide a message text."
                >
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email Address"
                    required
                  />
                </MDBValidationItem>
                <MDBBtn type="submit" color="danger" block>
                  Submit Request
                </MDBBtn>
              </MDBValidation>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Accorions;

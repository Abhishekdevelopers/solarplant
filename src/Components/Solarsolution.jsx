import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsLightningChargeFill } from "react-icons/bs";
import solar2 from "../assets/solar2.jpg";

import charge from "../assets/charge.jpeg";
import fossil from "../assets/fossil.webp";
import solar3 from "../assets/solar3.jpg";
import solar4 from "../assets/solar4.jpg";
import solar5 from "../assets/solar5.jpg";

const Solarsolution = () => {
  return (
    <>
      <div className="solarsolution">
        <Container>
          <div>
            <Row>
              <Col>
                <div className="bestofferheader">
                  <BsLightningChargeFill
                    size={80}
                    color="red"
                    className="lighticon"
                  />
                  <h3 className="hcolor">COMPANY OVERVIEW</h3>
                  <h1 className="hsec">
                    Best Offer For Renewable Solar Solutions
                  </h1>
                </div>
              </Col>
            </Row>
          </div>
          <div className="secsolarsolution">
            <Row>
              <Col md="8">
                <img src={solar2} alt="" className="solutionimage" />
              </Col>
              <Col md="4">
                <img src={solar3} alt="" className="solutionimage" />
              </Col>
            </Row>
          </div>
          <div className="secsolarsolution">
            <Row>
              <Col md="6">
                <img src={solar4} alt="" className="solutionimage" />
              </Col>
              <Col md="6">
                <img src={solar5} alt="" className="solutionimage" />
              </Col>
            </Row>
          </div>
          <div className="secsolarsolution">
            <Row>
              <Col md="8">
                <img src={solar2} alt="" className="solutionimage" />
              </Col>
              <Col md="4">
                <img src={solar3} alt="" className="solutionimage" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Solarsolution;

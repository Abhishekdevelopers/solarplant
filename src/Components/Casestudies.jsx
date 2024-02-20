import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsLightningChargeFill } from "react-icons/bs";
import studies from "../assets/studies.jpg";
import Casecard from "./Casecard";
const Casestudies = () => {
  return (
    <>
      <Container>
        <div className="casemain">
          <Row>
            <Col>
              <div className="caseheader1">
                <BsLightningChargeFill
                  size={80}
                  color="red"
                  className="lighticon"
                />
                <h3 className="hcolor">RECENT PROJECTS</h3>
                <h1 className="hsec">Our Latest Case Studies</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Casecard
                img={studies}
                heading="WINDMILL ENERGY"
                pgraph="How to Add Battery Backup to an Existing"
              />
            </Col>
            <Col md="4">
              <Casecard
                img={studies}
                heading="WINDMILL ENERGY"
                pgraph="How to Add Battery Backup to an Existing"
              />
            </Col>
            <Col md="4">
              <Casecard
                img={studies}
                heading="WINDMILL ENERGY"
                pgraph="How to Add Battery Backup to an Existing"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Casestudies;

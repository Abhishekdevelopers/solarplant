import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiSolidEditLocation } from "react-icons/bi";

const Subnavbar = () => {
  return (
    <>
      <div className="subnavcolor">
        <Container>
          <div className="subnav">
            <Row>
              <Col md="6">
                <ul className="subnav2">
                  <li>Energy Solution can help you reduce your fuel bills</li>
                </ul>
              </Col>
              <Col md="3">
                <Row>
                  <div className="subnav1">
                    <Col md="4">
                      <a
                        href="https://www.facebook.com/"
                        className="topnavbaricon"
                      >
                        <BiLogoFacebook />{" "}
                      </a>
                    </Col>
                    <Col md="4">
                      {" "}
                      <a
                        href="https://twitter.com/home?lang=en"
                        className="topnavbaricon"
                      >
                        <BiLogoTwitter />
                      </a>
                    </Col>
                    <Col md="4">
                      <a
                        href="https://www.linkedin.com/in/abhishek-abhishek-aa978b1a9"
                        className="topnavbaricon"
                      >
                        <BiLogoLinkedin />
                      </a>
                    </Col>
                  </div>
                </Row>
              </Col>
              <Col md="3">
                <Row>
                  <Col md="2">
                    <a
                      href="https://www.google.com/maps/place/Trilokpuri,+Delhi,+110091/@28.6021435,77.2858123,14z/data=!3m1!4b1!4m6!3m5!1s0x390ce4c222d9da97:0x3ea1ca718677356d!8m2!3d28.601243!4d77.3031561!16s%2Fm%2F0zwmxf4?entry=ttu"
                      className="topnavbaricon"
                    >
                      {" "}
                      <BiSolidEditLocation />
                    </a>
                  </Col>
                  <Col md="10">
                    <p> Find A Location</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Subnavbar;

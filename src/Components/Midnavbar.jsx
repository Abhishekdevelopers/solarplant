import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import square from "../assets/square.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const Midnavbar = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="midnav">
            <Col md="2">
              <div>
                <img src={square} alt="" className="midnavimg" />
              </div>
            </Col>
            <Col md="8">
              <div className="minnav1">
                <div className="minnav1">
                  <div className="midicon">
                    <span>
                      <BiPhoneCall size={60} color="blue" />
                    </span>
                  </div>
                  <div>
                    <span>
                      <h5>Phone No:</h5>
                    </span>
                    <span>
                      <a href="tel:8376014921" className="midnava">
                        (8376014921)
                      </a>
                    </span>
                  </div>
                </div>
                <div className="minnav2">
                  <div className="midicon">
                    <span>
                      <AiOutlineMail size={60} color="blue" />
                    </span>
                  </div>
                  <div>
                    <span>
                      <h5>Email Address:</h5>
                    </span>
                    <span>
                      <a
                        href="mailto: abhishekabhishek87810@gmail.com"
                        className="midnava"
                      >
                        abhishekabhishek87810@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="2">
              <div>
                <button className="midnavbtn">
                  <NavLink to="/contact">Get A Quote</NavLink>
                </button>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Midnavbar;

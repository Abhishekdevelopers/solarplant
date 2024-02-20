import React from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/over2.jpg";
import footer from "../assets/footer.jpg";
import { RiPhoneLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
const Mainfooter = () => {
  return (
    <>
      <div className="footercolor">
        <Container>
          <Row>
            <Col md="4">
              <p className="pfooterheading">Quick Contact</p>
              <ul className="ullink">
                <li>2072 New Town, Xblock Street WA 98370 United State</li>
                <li>
                  <i>
                    <RiPhoneLine /> <a href="tel:8376014921">(8376014921)</a>
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    <AiOutlineMail />{" "}
                    <a href="mailto: abhishekabhishek87810@gmail.com">
                      abhishekabhishek87810@gmail.com
                    </a>
                  </i>
                </li>
              </ul>
            </Col>
            <Col md="4">
              <p className="pfooterheading">Useful Services</p>
              <div className="flink">
                <div>
                  <ul className="ullink">
                    <li>
                      <NavLink to="/landorigination">
                        Land Origination And Mediation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/projectdevelopment">
                        Projects Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Epcdetailed">EPC Detailed Design</NavLink>
                    </li>
                    <li>
                      <NavLink to="/projectmanagement">
                        Project Management
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/safrtycommission">
                        Safety And Commissioning
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="footimg">
                <div>
                  <Row>
                    <Col md="4">
                      <img src={footer} alt="" className="fimg" />
                    </Col>
                    <Col md="4">
                      <img src={footer} alt="" className="fimg" />
                    </Col>
                    <Col md="4">
                      <img src={footer} alt="" className="fimg" />
                    </Col>
                  </Row>
                </div>
                <div className="footerimg">
                  <Row>
                    <Col md="4">
                      <img src={footer} alt="" className="fimg" />
                    </Col>
                    <Col md="4">
                      <img src={footer} alt="" className="fimg" />
                    </Col>
                    <Col md="4">
                      <img src={footer} alt="" className="fimg" />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Mainfooter;

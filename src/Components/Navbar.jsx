import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
const Navbar = () => {
  return (
    <>
      <Container>
        <div className="navbarmain">
          <Row>
            <Col md="9">
              <div className="nubbarmanuhide">
                <ul className="navbarmanu">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/service">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="navicon">
                <span>
                  <HiBars3BottomRight size={60} />
                </span>
                <span>
                  <HiOutlineSearchCircle size={60} color="white" />
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Navbar;

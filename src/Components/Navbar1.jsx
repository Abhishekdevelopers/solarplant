import React, { useState } from "react";
import "./Navbar1.css";
import { NavLink } from "react-router-dom";
import square from "../assets/square.jpg";
import { Col } from "react-bootstrap";
import Servicebtn from "./Servicebtn";
import Aboutbtn from "./Aboutbtn";
const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav1color">
      <div className="container">
        <nav>
          <Col md="10">
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menutext">
              <ul className={menuOpen ? "open" : ""}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <Aboutbtn />
                </li>
                <li>
                  <Servicebtn />
                </li>
                <li>
                  <NavLink to="/technical">Technical Legal Report</NavLink>
                </li>
                <li>
                  <NavLink to="/description">Description of Services</NavLink>
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
          <Col md="1">
            <div>
            <NavLink to="/"> <img src={square} alt="" className="midnavimg1" /></NavLink>
             
            </div>
          </Col>
        </nav>
      </div>
    </div>
  );
};
export default Navbar1;

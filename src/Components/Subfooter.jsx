import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";
import { TiLinkOutline } from "react-icons/ti";
const Subfooter = () => {
  return (
    <>
      <div className="subfooter">
        <Container>
          <Row>
            <Col md="6">
              <p className="subfooterp">
                <AiOutlineCopyright /> Copyright 2023. All Rights Reserved. |
                Designed by zip42lab Technology Dott. Ing. Gianni Bartoli –
                P.IVA 02233690508 –gianni.bartoli@pec.ordingar.it
              </p>
            </Col>
            <Col md="6">
              <div className="subfooterdiv">
                <div>
                  <NavLink to="/generalterms">
                    GENERAL TERMS & CONDITIONS OF SERVICES
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/privacy">DATA PRIVACY POLICY</NavLink>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Subfooter;

import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Serviceprops = (props) => {
  return (
    <>
      <Container>
        <div className="propsmain">
          <Row>
            <Col md="6">
              <h3 className="hcolor">{props.headings}</h3>
              <h1>{props.heading}</h1>
              <p>{props.paragraph}</p>
            </Col>
            <Col md="6">
              <img src={props.img} alt="" className="propsimg" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Serviceprops;

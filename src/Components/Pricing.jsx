import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";

const Pricing = (props) => {
  return (
    <>
      <Container>
        <div className="carditem">
          <h3>{props.heading}</h3>
          <h5>{props.subheading}</h5>
          <h2 className="cardprice">{props.price}</h2>
          <img src={props.img} alt="" className="priceimg" />
          <p className="cardtext">{props.pgraph}</p>
          <button className="cardbtn">{props.butt}</button>
        </div>
      </Container>
    </>
  );
};

export default Pricing;

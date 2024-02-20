import React from "react";
import "../App.css";
const Newscomp = (props) => {
  return (
    <>
      <div>
        <img src={props.img1} alt="" />
        <p>{props.p}</p>
        <p>{props.icon}</p>
        <p>{props.pheading}</p>
        <p>{props.pname}</p>
      </div>
    </>
  );
};

export default Newscomp;

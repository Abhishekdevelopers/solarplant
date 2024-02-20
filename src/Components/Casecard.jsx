import React from "react";
import "../App.css";
const Casecard = (props) => {
  return (
    <>
      <div className="casebox">
        <div className="casebox1">
          <div className="caseimg">
            <img src={props.img} alt="" className="casecardimg" />
          </div>
          <div className="casetext">
            <p className="casecardp1">{props.heading}</p>
            <p className="casecardp">{props.pgraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Casecard;

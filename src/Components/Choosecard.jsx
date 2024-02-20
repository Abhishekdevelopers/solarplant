import React from "react";

const Choosecard = (props) => {
  return (
    <>
      <div className="choosecard">
        <i>{props.chooseicone}</i>
        <h5>{props.choosecardh}</h5>
        <p>{props.choosep}</p>
      </div>
    </>
  );
};

export default Choosecard;

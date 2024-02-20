import React from "react";

const Blogcard = (props) => {
  return (
    <div>
      <img src={props.img1} alt="" className="blogimg" />
      <div className="blogpadding">
        <p className="pdate">{props.pdate}</p>
        <div>
          <span className="blogcoment">
            {props.comment} {props.commenttext}
          </span>
          <span className="blogview">
            {props.views} {props.viewstext}
          </span>
        </div>
        <p className="pheading">{props.pheading}</p>
        <span>
          <img src={props.img2} alt="" className="byimg" />
        </span>
        <span className="bytext">{props.byname}</span>
      </div>
    </div>
  );
};

export default Blogcard;

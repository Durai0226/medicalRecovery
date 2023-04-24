import React from "react";
import background from "../assets/background-1.svg";
import arrow from "../assets/R-arrow.svg";
import "../expert.css";
const Expert = () => {
  return (
    <div className="expert-container">
      <div className="container">
        <div className="line"></div>
        <div className="expert-heading">
          <h2 className="expert-text">Meet Our Experts</h2>
        </div>
        <div className="expert-content">
          <span className="expert-details">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </span>
        </div>
        <div className="btn-container-2">
          <a className="expert-link" href="#/">
            Learn More
          </a>
          <img className="link" src={arrow}></img>
        </div>
      </div>
      <div className="img-container">
        <img className="img" src={background}></img>
      </div>
    </div>
  );
};

export default Expert;

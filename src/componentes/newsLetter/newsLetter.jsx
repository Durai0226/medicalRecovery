import React from "react";
import "../newsLetter/newsLetter.css";
const NewsLetter = () => {
  return (
    <div className="news-container">
      <div className="news-details-container">
        <div className="news-heading">
          <h5 className="news-text">Newsletter</h5>
          <h2 className="news-head">JOIN US</h2>
        </div>
        <div className="news-content">
          <span className="news-details">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </span>
        </div>
        <div className="input-with-button">
          <input type="text" />
          <button className="news-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

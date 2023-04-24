import React from "react";
import "./rating.css";

const Rating = () => {
  return (
    <div className="rating-container">
      <div className="rating">
        <span className="rating-total">15K</span>
        <h3 className="rating-text">Happy Customers</h3>
      </div>
      <div className="rating">
        <span className="rating-total">150K</span>
        <h3 className="rating-text">Monthly Visitors</h3>
      </div>
      <div className="rating">
        <span className="rating-total">15</span>
        <h3 className="rating-text">Countries Worldwide</h3>
      </div>
      <div className="rating">
        <span className="rating-total">100+</span>
        <h3 className="rating-text">Top Partners</h3>
      </div>
    </div>
  );
};

export default Rating;

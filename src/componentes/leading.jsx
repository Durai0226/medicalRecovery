import React from "react";
import "./leading.css";
import star from "../assets/star.svg";
import instar from "../assets/in-star.svg";
import pic1 from "../assets/pic-1.svg";
import pic2 from "../assets/pic-2.svg";
import pic3 from "../assets/pic-3.svg";
const Leading = () => {
  return (
    <div className="leading-container">
      <div className="leading-heading">
        <h6 className="leading-text">Practice Advice</h6>
        <h2 className="leading-head">Leading Medicine</h2>
      </div>
      <div className="leading-content">
        <span className="leading-details">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </span>
      </div>
      <div className="review-container">
        <div className="review">
          <div className="review-star">
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-2" src={instar}></img>
          </div>
          <div className="review-txt">
            <span className="review-text">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </span>
          </div>
          <div className="profile-container">
            <div className="profile-1">
              <img src={pic1}></img>
            </div>
            <div className="name-container">
              <span className="name-1">Regina Miles</span>
              <span className="name-2">Designer</span>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="review-star">
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-2" src={instar}></img>
          </div>
          <div className="review-txt">
            <span className="review-text">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </span>
          </div>
          <div className="profile-container">
            <div className="profile-1">
              <img src={pic2}></img>
            </div>
            <div className="name-container">
              <span className="name-1">Regina Miles</span>
              <span className="name-2">Designer</span>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="review-star">
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-1" src={star}></img>
            <img className="star-2" src={instar}></img>
          </div>
          <div className="review-txt">
            <span className="review-text">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </span>
          </div>
          <div className="profile-container">
            <div className="profile-1">
              <img src={pic3}></img>
            </div>
            <div className="name-container">
              <span className="name-1">Regina Miles</span>
              <span className="name-2">Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leading;

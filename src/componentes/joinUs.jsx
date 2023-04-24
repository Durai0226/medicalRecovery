import React from "react";
import "./join.css";
import online from "../assets/online.svg";
import care from "../assets/care.svg";
import eCase from "../assets/case.svg";
const JoinUs = () => {
  return (
    <div className="container1">
      <div className="background-img">
        <div className="joinContainer">
          {" "}
          <span className="join-text">Join Us</span>
        </div>

        <div className="heading-content">
          <h1 className="heading">A Great Place to Receive Care</h1>
        </div>
        <div className="details">
          <span className="details-text">
            Medical Recover is most focused in helping you discover your most
            beauiful smile
          </span>
        </div>
        <div className="btn-container-1">
          <div>
            <button className="btn-1">Get Quote Now</button>
          </div>
          <div>
            <button className="btn-2">Learn More</button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-img">
              <img src={online}></img>
              <span className="card-text">Online Appoinment</span>
            </div>
            <div className="card-line"></div>
            <div className="card-details">
              <span className="card-content">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={care}></img>
              <span className="card-text">Online Appoinment</span>
            </div>
            <div className="card-line"></div>
            <div className="card-details">
              <span className="card-content">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={eCase}></img>
              <span className="card-text">Online Appoinment</span>
            </div>
            <div className="card-line"></div>
            <div className="card-details">
              <span className="card-content">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

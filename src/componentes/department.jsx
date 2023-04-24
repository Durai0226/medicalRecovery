import React from "react";
import "./department.css";
import star from "../assets/star.svg";
import like from "../assets/like.svg";
import eye from "../assets/eye.svg";
import arrow from "../assets/R-arrow.svg";
import basket from "../assets/basket.svg";
import frame from "../assets/frame.svg";
const Department = () => {
  return (
    <div className="department-container">
      <div className="department">
        {" "}
        <div className="department-heading">
          <h6 className="department-text">Practice Advice</h6>
          <h2 className="department-head">Our Department</h2>
        </div>
        <div className="department-content">
          <span className="department-details">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </span>
        </div>
        <div>
          <div className="department-card-container">
            <div className="department-main-container">
              <div className="department-card">
                <div className="Dcard-container">
                  <div className="Dcard">
                    <div className="sale-btn">
                      <button className="btn-3">Sale</button>
                    </div>
                    <div className="product">
                      <img src={like} className="product-icon"></img>
                      <img src={basket} className="product-icon"></img>
                      <img src={eye} className="product-icon"></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="department-container-1">
                <div className="department-card-text">
                  <span className="Dcard-text">Painless procedures</span>
                  <div className="star-container">
                    <span>
                      <img className="star" src={star}></img>4.9
                    </span>
                  </div>
                </div>
                <span className="Dcard-text-1">Quick examination</span>
                <div className="department-details-container">
                  <span className="department-details-1">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </span>
                </div>
                <div className="sales-container">
                  <img src={frame}></img>
                  <span className="sales">15 Sales</span>
                </div>
                <div className="price-container">
                  <span className="price">$16.48</span>
                  <span className="price-1">$6.48</span>
                </div>
                <div className="department-btn-container">
                  <a href="#/" className="department-btn">
                    Learn More
                  </a>
                  <img className="link-1" src={arrow}></img>
                </div>
              </div>
            </div>
            <div className="department-main-container">
              <div className="department-card">
                <div className="Dcard-container-1">
                  <div className="Dcard">
                    <div className="sale-btn">
                      <button className="btn-3">Sale</button>
                    </div>
                    <div className="product">
                      <img src={like} className="product-icon"></img>
                      <img src={basket} className="product-icon"></img>
                      <img src={eye} className="product-icon"></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="department-container-1">
                <div className="department-card-text">
                  <span className="Dcard-text">Cancer Care</span>
                  <div className="star-container">
                    <span>
                      <img className="star" src={star}></img>4.9
                    </span>
                  </div>
                </div>
                <span className="Dcard-text-1">Online Appoinment</span>
                <div className="department-details-container">
                  <span className="department-details-1">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </span>
                </div>
                <div className="sales-container">
                  <img src={frame}></img>
                  <span className="sales">15 Sales</span>
                </div>
                <div className="price-container">
                  <span className="price">$16.48</span>
                  <span className="price-1">$6.48</span>
                </div>
                <div className="department-btn-container">
                  <a href="#/" className="department-btn">
                    Learn More
                  </a>
                  <img className="link-1" src={arrow}></img>
                </div>
              </div>
            </div>
            <div className="department-main-container">
              <div className="department-card">
                <div className="Dcard-container-2">
                  <div className="Dcard">
                    <div className="sale-btn">
                      <button className="btn-3">Sale</button>
                    </div>
                    <div className="product">
                      <img src={like} className="product-icon"></img>
                      <img src={basket} className="product-icon"></img>
                      <img src={eye} className="product-icon"></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="department-container-1">
                <div className="department-card-text">
                  <span className="Dcard-text">Best dental surgeons</span>
                  <div className="star-container">
                    <span>
                      <img className="star" src={star}></img>4.9
                    </span>
                  </div>
                </div>
                <span className="Dcard-text-1">Emergency Case</span>
                <div className="department-details-container">
                  <span className="department-details-1">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </span>
                </div>
                <div className="sales-container">
                  <img src={frame}></img>
                  <span className="sales">15 Sales</span>
                </div>
                <div className="price-container">
                  <span className="price">$16.48</span>
                  <span className="price-1">$6.48</span>
                </div>
                <div className="department-btn-container">
                  <a href="#/" className="department-btn">
                    Learn More
                  </a>
                  <img className="link-1" src={arrow}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;

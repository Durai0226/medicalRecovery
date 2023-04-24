import React from "react";
import "../footer/footer.css";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";
import phone from "../assets/phone.svg";
import map from "../assets/map.svg";
import email from "../assets/email.svg";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-details">
            <h5 className="footer-heading">Company Info</h5>
            <a href="#/" className="footer-text">
              About Us
            </a>
            <a href="#/" className="footer-text">
              Carrier
            </a>
            <a href="#/" className="footer-text">
              We are hiring
            </a>
            <a href="#/" className="footer-text">
              Blog
            </a>
          </div>
          <div className="footer-details">
            <h5 className="footer-heading">Legal</h5>
            <a href="#/" className="footer-text">
              About Us
            </a>
            <a href="#/" className="footer-text">
              Carrier
            </a>
            <a href="#/" className="footer-text">
              We are hiring
            </a>
            <a href="#/" className="footer-text">
              Blog
            </a>
          </div>
          <div className="footer-details">
            <h5 className="footer-heading">Features</h5>
            <a href="#/" className="footer-text">
              Business Marketing
            </a>
            <a href="#/" className="footer-text">
              User Analytic
            </a>
            <a href="#/" className="footer-text">
              Live Chat
            </a>
            <a href="#/" className="footer-text">
              Unlimited Support
            </a>
          </div>
          <div className="footer-details">
            <h5 className="footer-heading">Resources</h5>
            <a href="#/" className="footer-text">
              IOS & Android
            </a>
            <a href="#/" className="footer-text">
              Watch a Demo
            </a>
            <a href="#/" className="footer-text">
              Customers
            </a>
            <a href="#/" className="footer-text">
              API
            </a>
          </div>
          <div className="footer-details">
            <h5 className="footer-heading">Get In Touch</h5>
            <div className="footer-link">
              <img src={phone}></img>
              <a href="#/" className="footer-text">
                (480) 555-0103
              </a>
            </div>
            <div className="footer-link">
              <img src={map}></img>
              <a href="#/" className="footer-text">
                4517 Washington Ave. Manchester, Kentucky 39495
              </a>
            </div>
            <div className="footer-link">
              <img src={email}></img>
              <a href="#/" className="footer-text">
                debra.holt@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-social-link">
        <div className="footer-social-container">
          <h5 className="footer-social-text">
            Made With Love By Figmaland All Right Reserved{" "}
          </h5>
          <div className="footer-social-icon">
            <img src={facebook} alt="Facebook icon"></img>
            <img src={insta} alt="Instagram icon"></img>
            <img src={twitter} alt="Twitter icon"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

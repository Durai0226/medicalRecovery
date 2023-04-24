import React from "react";
import "../ourTeam/ourTeam.css";
import Larrow from "../assets/L-arrow.svg";
import Rarrow from "../assets/Right-arrow.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";
import profile from "../assets/user-cover-1.svg";
import profile_1 from "../assets/user-cover-2.svg";
import profile_2 from "../assets/user-cover-3.svg";
import profile_3 from "../assets/user-cover-4.svg";
const OurTeam = () => {
  return (
    <div className="our-team-container">
      <div className="our-container">
        <div className="our-details-container">
          <div className="our-heading">
            <h5 className="our-text">Team</h5>
            <h2 className="our-head">Our Team</h2>
          </div>
          <div className="our-content">
            <span className="our-details">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </span>
          </div>
        </div>
        <div className="cover-card">
          <div className="our-left-arrow">
            <img src={Larrow}></img>
          </div>
          <div className="cover-container">
            <div className="cover-img">
              <img
                className="user-cover-img"
                src={profile}
                alt="Profile picture"
              ></img>
            </div>
            <div className="team-details">
              <h5 className="team-member">Julian Jameson</h5>
              <span className="team-member-1">Profession</span>
            </div>
            <div className="social-link">
              <img src={facebook} alt="Facebook icon"></img>
              <img src={insta} alt="Instagram icon"></img>
              <img src={twitter} alt="Twitter icon"></img>
            </div>
          </div>
          <div className="cover-container">
            <div className="cover-img">
              <img
                className="user-cover-img"
                src={profile_1}
                alt="Profile picture"
              ></img>
            </div>
            <div className="team-details">
              <h5 className="team-member">Julian Jameson</h5>
              <span className="team-member-1">Profession</span>
            </div>
            <div className="social-link">
              <img src={facebook} alt="Facebook icon"></img>
              <img src={insta} alt="Instagram icon"></img>
              <img src={twitter} alt="Twitter icon"></img>
            </div>
          </div>
          <div className="cover-container">
            <div className="cover-img">
              <img
                className="user-cover-img"
                src={profile_2}
                alt="Profile picture"
              ></img>
            </div>
            <div className="team-details">
              <h5 className="team-member">Julian Jameson</h5>
              <span className="team-member-1">Profession</span>
            </div>
            <div className="social-link">
              <img src={facebook} alt="Facebook icon"></img>
              <img src={insta} alt="Instagram icon"></img>
              <img src={twitter} alt="Twitter icon"></img>
            </div>
          </div>
          <div className="cover-container">
            <div className="cover-img">
              <img
                className="user-cover-img"
                src={profile_3}
                alt="Profile picture"
              ></img>
            </div>
            <div className="team-details">
              <h5 className="team-member">Julian Jameson</h5>
              <span className="team-member-1">Profession</span>
            </div>
            <div className="social-link">
              <img src={facebook} alt="Facebook icon"></img>
              <img src={insta} alt="Instagram icon"></img>
              <img src={twitter} alt="Twitter icon"></img>
            </div>
          </div>
          <div className="our-right-arrow">
            <img src={Rarrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

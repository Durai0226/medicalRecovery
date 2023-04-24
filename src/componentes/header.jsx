import React, { useState } from "react";
import "./nav.css";
import left from "../assets/left-arrow.svg";
import { FiMenu, FiX } from "react-icons/fi";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="header">
        <h3>MedicalRecov</h3>
        <div onClick={handleClick} className="hamburger-menu">
          {open ? (
            <FiX className="close-icon"></FiX>
          ) : (
            <FiMenu className="menu-icon"></FiMenu>
          )}
        </div>
        <nav onClick={closeMenu} className={!open ? "nav-active" : "nav"}>
          <div className="links">
            <a href="/#">Home</a>
            <a href="/#">Product</a>
            <a href="/#">Pricing</a>
            <a href="/#">Contact</a>
          </div>
          <div className="loginContainer">
            <span className="header-text">Login</span>
            <div className="btn-container">
              <button className="btn">Join us</button>
              <img src={left} className="logo" alt="logo" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
